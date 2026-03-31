export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded bg-primary flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M8 6L10.5 7.5V10.5L8 12L5.5 10.5V7.5L8 6Z" fill="white"/>
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">Nexus AI</span>
      </div>
    </div>
  )
}