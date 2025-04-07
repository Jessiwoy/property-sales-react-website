// presentation/components/atoms/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react'
import {colors} from '../../../shared/constant/colors.ts';

// Declaração componente funcional Button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode // Permite qualquer conteúdo dentro do botão
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            className="w-full rounded-full py-2 font-semibold text-white"
            style={{ background: colors.primary }}
            {...props}
        >
            {children}
        </button>
    )
}