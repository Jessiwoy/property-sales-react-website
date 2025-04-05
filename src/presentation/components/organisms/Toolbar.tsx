import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { colors } from "../../../shared/constant/colors.ts"

interface ToolbarProps {
    showButtons?: boolean
}

// Define o componente `Toolbar`, que recebe `showButtons` como propriedade opcional
export const Toolbar = ({ showButtons = false }: ToolbarProps) => {
     const navigate = useNavigate()

    return (
        <header className="flex items-center justify-between px-6 py-4" style={{ background: colors.secondary }}>
            {/* Div interna que contém toda a estrutura da toolbar */}
            <div className="layout flex items-center justify-between w-full">
                {/* Área do logotipo e nome da empresa */}
                <div className="flex items-center gap-2">
                    {/* Exibe o logotipo da empresa */}
                    <img src={logo} alt="Agência Batatinha" className="h-6 w-6 rounded-full overflow-hidden" />
                    <span className="text-white font-semibold">Agência batatinha</span>
                </div>

                {/* Renderiza os botões apenas se `showButtons` for verdadeiro */}
                {showButtons && (
                    <div className="flex gap-4">
                        {/* Botão "Contato" */}
                        <button className="text-white text-xs px-4 py-1">
                            Contato
                        </button>
                        {/* Botão "Sair" que redireciona para a página de login */}
                        <button
                            className="text-white px-4 py-1 text-xs rounded h-[2.3em] w-[7em]"
                            style={{ background: colors.primary }}
                            onClick={() => navigate('/login')}
                        >
                            Sair
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}
