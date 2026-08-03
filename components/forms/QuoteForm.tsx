'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .regex(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  propertyType: z.enum(['home', 'business'], { message: 'Please select a property type' }),
  zip: z
    .string()
    .regex(/^3[2-4]\d{3}(-\d{4})?$/, 'Please enter a Florida ZIP code (32000–34999)'),
  message: z.string().optional(),
  city: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const SERVICES_LIST = [
  'New Door Installation',
  'Garage Door Repair',
  'Spring Replacement',
  'Opener Services',
  'Emergency Service',
  'Commercial Doors',
  'Not Sure',
]

interface Props {
  prefilledCity?: string
  compact?: boolean
}

export function QuoteForm({ prefilledCity, compact = false }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { city: prefilledCity ?? '' },
  })

  async function onSubmit(data: FormData) {
    setStatus('submitting')
    try {
      // Simulate API call — replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1200))
      console.log('Form submitted:', data)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="text-green-600" size={32} aria-hidden="true" />
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-slate">Request Received!</h3>
        <p className="text-brand-steel max-w-sm">
          Thank you! We&apos;ll call you within 1 hour during business hours (Mon–Sat, 8am–7pm).
        </p>
        <a
          href="tel:+18638083341"
          className="mt-4 inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-brand-amber-hover transition-colors"
        >
          Need faster help? Call now
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <input type="hidden" {...register('city')} />

      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')}>
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="fullName" className="text-sm font-semibold text-brand-slate">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            className={cn(
              'px-4 py-3 rounded-lg border text-brand-slate text-base bg-white transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent',
              errors.fullName ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
            )}
            aria-required="true"
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
              <AlertCircle size={12} aria-hidden="true" /> {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-semibold text-brand-slate">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(863) 555-1234"
            className={cn(
              'px-4 py-3 rounded-lg border text-brand-slate text-base bg-white transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent',
              errors.phone ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
            )}
            aria-required="true"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
              <AlertCircle size={12} aria-hidden="true" /> {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold text-brand-slate">
          Email <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          className={cn(
            'px-4 py-3 rounded-lg border text-brand-slate text-base bg-white transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent',
            errors.email ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
          )}
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
            <AlertCircle size={12} aria-hidden="true" /> {errors.email.message}
          </p>
        )}
      </div>

      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')}>
        {/* Service */}
        <div className="flex flex-col gap-1">
          <label htmlFor="service" className="text-sm font-semibold text-brand-slate">
            Service Needed <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            className={cn(
              'px-4 py-3 rounded-lg border text-brand-slate text-base bg-white transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent',
              errors.service ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
            )}
            aria-required="true"
            aria-describedby={errors.service ? 'service-error' : undefined}
            {...register('service')}
          >
            <option value="">Select a service…</option>
            {SERVICES_LIST.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
              <AlertCircle size={12} aria-hidden="true" /> {errors.service.message}
            </p>
          )}
        </div>

        {/* ZIP */}
        <div className="flex flex-col gap-1">
          <label htmlFor="zip" className="text-sm font-semibold text-brand-slate">
            ZIP Code <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="zip"
            type="text"
            autoComplete="postal-code"
            placeholder="33801"
            maxLength={10}
            className={cn(
              'px-4 py-3 rounded-lg border text-brand-slate text-base bg-white transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent',
              errors.zip ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'
            )}
            aria-required="true"
            aria-describedby={errors.zip ? 'zip-error' : undefined}
            {...register('zip')}
          />
          {errors.zip && (
            <p id="zip-error" className="text-red-500 text-xs flex items-center gap-1" role="alert">
              <AlertCircle size={12} aria-hidden="true" /> {errors.zip.message}
            </p>
          )}
        </div>
      </div>

      {/* Property Type */}
      {!compact && (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-brand-slate">
            Property Type <span className="text-red-500" aria-hidden="true">*</span>
          </span>
          <div className="flex gap-4">
            {(['home', 'business'] as const).map(type => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value={type}
                  className="w-4 h-4 accent-brand-amber"
                  {...register('propertyType')}
                />
                <span className="text-brand-slate text-sm capitalize">{type}</span>
              </label>
            ))}
          </div>
          {errors.propertyType && (
            <p className="text-red-500 text-xs flex items-center gap-1" role="alert">
              <AlertCircle size={12} aria-hidden="true" /> {errors.propertyType.message}
            </p>
          )}
        </div>
      )}

      {/* Message */}
      {!compact && (
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-semibold text-brand-slate">
            Additional Details <span className="text-brand-steel font-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            autoComplete="off"
            placeholder="Describe the issue or what you're looking for…"
            className="px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-brand-slate text-base bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-sky focus:border-transparent resize-none"
            {...register('message')}
          />
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3" role="alert">
          <AlertCircle size={16} aria-hidden="true" />
          Something went wrong. Please call us at (863) 808-3341.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-base transition-all',
          'bg-brand-amber text-brand-navy hover:bg-brand-amber-hover',
          'disabled:opacity-70 disabled:cursor-not-allowed',
          '[box-shadow:var(--shadow-cta)]'
        )}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send My Free Quote Request'
        )}
      </button>
      <p className="text-center text-brand-steel text-xs">
        We respond within 1 hour during business hours. No spam, ever.
      </p>
    </form>
  )
}
