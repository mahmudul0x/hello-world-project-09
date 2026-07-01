import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const luxButton = cva(
  "ripple-btn inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft-lux hover:shadow-luxury hover:-translate-y-0.5",
        gold:
          "bg-[image:var(--gradient-gold)] text-dark shadow-gold hover:-translate-y-0.5",
        outline:
          "border border-foreground/15 bg-transparent text-foreground hover:border-primary hover:text-primary",
        ghost: "bg-transparent text-foreground hover:bg-primary-soft hover:text-primary",
        dark: "bg-dark text-background hover:bg-primary",
      },
      size: {
        sm: "h-10 rounded-[14px] px-4 text-sm",
        md: "h-12 rounded-[18px] px-6 text-sm",
        lg: "h-14 rounded-[18px] px-8 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface LuxButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof luxButton> {}

export const LuxButton = forwardRef<HTMLButtonElement, LuxButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(luxButton({ variant, size }), className)} {...props} />
  ),
);
LuxButton.displayName = "LuxButton";
