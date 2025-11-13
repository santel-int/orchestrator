export default function Card({ children, className, ...props }: { children: React.ReactNode, className?: string, props?: React.HTMLAttributes<HTMLDivElement> }) {
  return (
    <div className={`p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-all ${className}`} {...props}>
      {children}
    </div>
  )
}