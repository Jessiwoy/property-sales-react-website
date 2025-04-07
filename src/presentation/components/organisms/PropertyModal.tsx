import { colors } from "../../../shared/constant/colors.ts"

interface PropertyModalProps {
    image: string
    price: string
    visible: boolean
    onClose: () => void
    info: { label: string; value: string }[]
}

export const PropertyModal = ({
    image,
    price,
    visible,
    onClose,
    info}: PropertyModalProps) => {
    if (!visible) return null // Se o modal não estiver visível, não renderiza nada

    return (
        // Container principal do modal com fundo escurecido
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div
                className="relative rounded-lg overflow-hidden w-[36rem]"
                style={{ background: colors.white[100] }}
            >
                {/* Botão de fechar - fora da imagem */}
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 text-[1.5em] text-gray-400 font-light leading-none"
                >
                    ×
                </button>

                {/* Imagem */}
                <div className="m-6">
                    <img src={image} className="w-full h-80 object-cover rounded-lg" />
                </div>

                {/* Info + Comprar */}
                <div className="flex flex-col px-6 pb-6">
                    {/* Preço em cima */}
                    <span
                        className="text-right text-[1.5em] font-bold mb-2"
                        style={{ color: colors.black[1000] }}
                    >
            {price}
          </span>

                    <div className="flex justify-between items-center gap-2">
                        {/* Tags */}
                        <div className="flex gap-2 flex-wrap">
                            {info.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="px-4 py-2 text-sm rounded-md text-center"
                                    style={{
                                        background: colors.white[300],
                                        minWidth: '90px',
                                    }}
                                >
                                    {item.value} {item.label}
                                </div>
                            ))}
                        </div>

                        {/* Botão */}
                        <div
                            className="px-4 py-2 text-sm rounded text-white cursor-pointer"
                            style={{ background: colors.primary }}
                        >
                            Comprar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}