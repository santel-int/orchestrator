import { cva, type VariantProps } from "class-variance-authority"

type ButtonColors = "gray" | "slate" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

const buttonStyles = cva(
  "flex items-center gap-2 rounded-lg cursor-pointer px-4 py-2 font-medium border-2",
  {
    variants: {
      style: {
        primary: "bg-PRIMARY-500 text-white hover:bg-PRIMARY-600 border-PRIMARY-500 hover:border-PRIMARY-600 transition-colors",
        secondary: "bg-PRIMARY-100 text-PRIMARY-500 hover:bg-PRIMARY-200 border-PRIMARY-100 hover:border-PRIMARY-200 transition-colors",
        ghost: "bg-transparent text-PRIMARY-500 hover:bg-PRIMARY-100 border-transparent hover:border-PRIMARY-100 transition-colors",
        outline: "bg-transparent text-PRIMARY-500 border-PRIMARY-500 hover:bg-PRIMARY-100 hover:border-PRIMARY-600 transition-colors",
      },
    },
    defaultVariants: {
      style: "primary",
    },
  }
)

export default function Button({ children, style = "primary", color = "gray" }: { children: React.ReactNode, style?: VariantProps<typeof buttonStyles>['style'], color?: ButtonColors }) {
  return (
    <div className={buttonStyles({ style }).replaceAll("PRIMARY", color)}>
      {children}
    </div>
  )
}