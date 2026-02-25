import { cn } from '@my-ds/utils'
import { type BadgeProps } from './types'
import { badgeVariants } from './variants'

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
