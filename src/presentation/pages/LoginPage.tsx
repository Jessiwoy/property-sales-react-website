import { CardLogin } from '../components/molecules/CardLogin'
import { BackgroundImageText } from '../components/molecules/BackgroundImageText'
import { Toolbar } from '../components/organisms/Toolbar'
// To-do: Verificar tamanho da imagem
import imageBg from '../../assets/loginHero.png'

// Definição do componente funcional LoginPage
export const LoginPage = () => {
    return (
        <div className=" min-h-screen flex flex-col">
            {/* Componente de navegação/cabeçalho */}
            <Toolbar />

            {/* Conteúdo principal da página */}
            <main className="layout flex  justify-center gap-8 p-4">
                <div className="m-6">
                    <CardLogin />
                </div>

                {/* Separador vertical */}
                <div className="hidden lg:block w-[0.1em] h-[35em] mt-6 bg-gray-100 mx-4 rounded-full" />

                {/* Seção com imagem de fundo e texto */}
                <div className="m-6">
                    <BackgroundImageText
                        imageUrl={imageBg}
                        text="Bem-vindo à agência Batatinha"
                        width="28em"
                        height="35em"
                        screen="login"
                    />
                </div>
            </main>
        </div>
    )
}
