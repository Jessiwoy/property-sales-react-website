import {colors} from "../../../shared/constant/colors.ts";

// Define as propriedades que o componente pode receber
interface BackgroundImageTextProps {
    imageUrl: string
    text: string
    width?: string
    height?: string
    screen?: 'showroom' | 'login'
}

// Componente funcional principal
export const BackgroundImageText = ({
    imageUrl,
    text,
    width = '100%',
    height = '38rem',
    screen }: BackgroundImageTextProps) => {

    // Flags para identificar qual tela está sendo renderizada
    const isShowroom = screen === 'showroom'
    const isLogin = screen === 'login'

    return (
        <div
            className={`relative overflow-hidden ${isLogin ? 'rounded-2xl' : ''}`}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width,
                height,
            }}
        >
            {/* Renderiza o texto somente na tela showroom */}
            {isShowroom && (
                <h1
                    className="absolute left-[5.5em] top-[3.5em] text-4xl leading-normal font-semibold max-w-[600px]"
                    style={{ color: colors.black[300] }}
                >
                    {text}
                </h1>
            )}

            {/* Renderiza o texto somente na tela login */}
            {isLogin && (
                <h1
                    className="absolute left-[1em] top-[2em] text-[1.6em] opacity-80 max-w-[65%]"
                    style={{ color: colors.white[200] }}
                >
                    {text}
                </h1>
            )}
        </div>
    )
}
