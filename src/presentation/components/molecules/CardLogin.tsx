import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Text } from '../atoms/Text'
import { colors } from "../../../shared/constant/colors.ts"

export const CardLogin = () => {
    // Estados para os campos do formulário
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)

    const navigate = useNavigate()

    // Função chamada ao clicar no botão de login
    const handleLogin = () => {
        // Apenas navega sem validações
        navigate('/showcase')
    }

    // Função chamada ao clicar no botão de registro
    const handleRegister = () => {
        // Simula um cadastro e volta para tela de login
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setIsRegistering(false)
    }

    return (
        <div
            style={{ width: '28em', height: '35em', backgroundColor: colors.white[200] }}
            className="rounded-2xl shadow-md px-8 py-12 flex flex-col justify-between"
        >
            <div>
                <Text className="text-[1.5rem] font-bold mb-6" style={{ color: colors.black[300] }}>
                    {isRegistering ? 'Crie sua conta' : 'Entre com seu email'} <br />
                    {isRegistering ? '' : 'e senha'}
                </Text>

                {/* Área do formulário */}
                <div className="pt-8 flex flex-col gap-6">
                    <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    {isRegistering && (
                        <Input
                            placeholder="Confirmar senha"
                            type="password"
                            value={confirmPassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                        />
                    )}
                    <Button onClick={isRegistering ? handleRegister : handleLogin}>
                        {isRegistering ? 'Registrar' : 'Entrar'}
                    </Button>
                </div>
            </div>

            {/* Rodapé do card com link para alternar entre login e registro */}
            <div className="border-t border-gray-200 pt-6 text-center text-sm">
                <span className="font-semibold text-xs text-black">
                    {isRegistering ? 'Já possui uma conta? ' : 'Não possui uma conta? '}
                </span>
                {/* Botão de alternância de modo (login <-> cadastro) */}
                <div className="inline-block relative cursor-pointer" onClick={() => setIsRegistering(!isRegistering)}>
                    <span className="text-[orange] font-bold text-sm">
                        {isRegistering ? 'Conecte-se' : 'Criar'}
                    </span>
                    {/* Bolinha decorativa abaixo do texto */}
                    <div className="absolute left-1/2 -translate-x-1/2 mt-[2px] w-2 h-2 bg-[orange] rounded-full" />
                </div>
            </div>
        </div>
    )
}