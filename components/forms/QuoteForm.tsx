'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { SERVICES } from '@/lib/services'

const FL_ZIP = /^3[2-4]\d{3}(-\d{4})?$/

const schema = z.object({
  name:         z.string().min(2, { message: 'Please enter your full name' }),
  phone:        z.string().min(10, { message: 'Please enter a valid phone number' }),
  email:        z.string().email({ message: 'Please enter a valid email address' }),
  service:      z.string().min(1, { message: 'Please select a service' }),
  propertyType: z.enum(['residential', 'commercial'], { errorMap: () => ({ message: 'Please select a property type' }) }),
  zip:          z.string().regex(FL_ZIP, { message: 'Please enter a valid Florida ZIP code' }),
  message:      z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl font-display font-bold text-brand-slate mb-2">We&apos;ll Be In Touch Soon!</h3>
        <p className="text-brand-steel">Thanks for reaching out. We typically respond within 1 hour during business hours (Mon–Sat, 8am–7pm).</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-brand-sky font-semibold hover:underline text-sm"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm" role="alert">
          <AlertCircle size={18} aria-hidden="true" className="shrink-0" />
          Something went wrong. Please call us at (773) 985-1092.
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-slate mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            className={fieldClass(!!errors.name)}
            {...register('name')}
          />
          {errors.name && <p id="name-error" className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-brand-slate mb-1.5">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(773) 555-0100"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            aria-invalid={!!errors.phone}
            className={fieldClass(!!errors.phone)}
            {...register('phone')}
          />
          {errors.phone && <p id="phone-error" className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email + ZIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-brand-slate mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={!!errors.email}
            className={fieldClass(!!errors.email)}
            {...register('email')}
          />
          {errors.email && <p id="email-error" className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="zip" className="block text-sm font-semibold text-brand-slate mb-1.5">
            ZIP Code <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="zip"
            type="text"
            inputMode="numeric"
            maxLength={10}
            autoComplete="postal-code"
            placeholder="33801"
            aria-describedby={errors.zip ? 'zip-error' : undefined}
            aria-invalid={!!errors.zip}
            className={fieldClass(!!errors.zip)}
            {...register('zip')}
          />
          {errors.zip && <p id="zip-error" className={errorClass}>{errors.zip.message}</p>}
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-brand-slate mb-1.5">
          Service Needed <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          aria-describedby={errors.service ? 'service-error' : undefined}
          aria-invalid={!!errors.service}
          className={fieldClass(!!errors.service)}
          {...register('service')}
        >
          <option value="">Select a service…</option>
          {SERVICES.map(s => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
        </select>
        {errors.service && <p id="service-error" className={errorClass}>{errors.service.message}</p>}
      </div>

      {/* Property Type */}
      <fieldset>
        <legend className="block text-sm font-semibold text-brand-slate mb-2">
          Property Type <span className="text-red-500" aria-hidden="true">*</span>
        </legend>
        <div className="flex gap-6" role="group">
          {(['residential', 'commercial'] as const).map(type => (
            <label key={type} className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="radio"
                value={type}
                className="w-4 h-4 text-brand-sky accent-brand-sky"
                {...register('propertyType')}
              />
              <span className="text-sm font-medium text-brand-slate capitalize">{type}</span>
            </label>
          ))}
        </div>
        {errors.propertyType && <p className={errorClass}>{errors.propertyType.message}</p>}
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-brand-slate mb-1.5">
          Additional Details <span className="text-brand-steel font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe the issue or any details that would help us prepare…"
          className={`${fieldClass(false)} resize-none`}
          {...register('message')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold text-base py-4 px-6 rounded-xl hover:bg-brand-amberHover transition-colors min-h-[56px] shadow-cta disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Get My Free Quote'
        )}
      </button>

      <p className="text-xs text-brand-steel text-center">
        No spam, ever. We&apos;ll only contact you about your request.
      </p>
    </form>
  )
}

const fieldClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-lg border text-sm text-brand-slate placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors ${
    hasError
      ? 'border-red-400 bg-red-50 focus:ring-red-300'
      : 'border-gray-200 bg-white focus:ring-brand-sky/30 focus:border-brand-sky'
  }`

const errorClass = 'mt-1.5 text-xs text-red-600 font-medium'
