import { cn } from '@/lib/utils'

interface Props {
  rating: number
  maxStars?: number
  size?: number
  className?: string
}

export function StarRating({ rating, maxStars = 5, size = 16, className }: Props) {
  return (
    <div
      className={cn('inline-flex items-center gap-0.5', className)}
      aria-label={`${rating} out of ${maxStars} stars`}
      role="img"
    >
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating)
        const partial = !filled && i < rating
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {partial ? (
              <>
                <defs>
                  <linearGradient id={`partial-${i}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset={`${(rating % 1) * 100}%`} stopColor="#F59E0B" />
                    <stop offset={`${(rating % 1) * 100}%`} stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill={`url(#partial-${i})`}
                />
              </>
            ) : (
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={filled ? '#F59E0B' : '#D1D5DB'}
              />
            )}
          </svg>
        )
      })}
    </div>
  )
}
