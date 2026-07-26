import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
        secondary:
          'border-transparent bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200',
        destructive:
          'border-transparent bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300',
        outline: 'text-slate-950 dark:text-slate-50 border-slate-200 dark:border-slate-800',
        emerald: 'border-transparent bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
