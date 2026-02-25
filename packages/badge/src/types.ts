import type * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { badgeVariants } from './variants'

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}
