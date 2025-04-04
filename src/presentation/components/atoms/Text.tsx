// presentation/components/atoms/Text.tsx
import { HTMLAttributes, ReactNode } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
    className?: string // Permite passar classes CSS adicionais
}
// Declaração do componente funcional Text
export const Text = ({ children, className = '', ...props }: TextProps) => {
    return (
        <p className={`text-black ${className}`} {...props}>
            {children}
        </p>
    )
}