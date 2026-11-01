import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "icon"
  className?: string
}

export function Logo({ variant = "full", className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center font-bold tracking-tight",
        variant === "full" ? "text-lg" : "justify-center text-xl",
        className,
      )}
      aria-label="OPTIONIC"
    >
      {variant === "full" ? (
        <span className="text-foreground">
          OPTION<span className="text-primary">IC</span>
        </span>
      ) : (
        <span className="text-primary">O</span>
      )}
    </span>
  )
}
