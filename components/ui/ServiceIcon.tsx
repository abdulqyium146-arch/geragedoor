import { Home, Wrench, Zap, Radio, AlertTriangle, Building2, type LucideProps } from 'lucide-react'

const ICONS = { Home, Wrench, Zap, Radio, AlertTriangle, Building2 }

interface Props extends LucideProps {
  name: string
}

export function ServiceIcon({ name, ...props }: Props) {
  const Icon = ICONS[name as keyof typeof ICONS] ?? Home
  return <Icon {...props} aria-hidden="true" />
}
