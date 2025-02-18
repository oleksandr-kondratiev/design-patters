const Spin = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-r-2 border-l-2 border-primary", className)} {...props} />
  )
})

