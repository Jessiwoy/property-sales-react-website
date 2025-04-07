import { colors } from "../../../shared/constant/colors.ts"

interface PropertyCardProps {
    image: string
    price: string
    size: string
    bedrooms: number
    bathrooms: number
    onClick: () => void
}

export const PropertyCard = ({
         image,
         price,
         size,
         bedrooms,
         bathrooms,
         onClick,
     }: PropertyCardProps) => {
    return (
        // Container do card
        <div
            className="overflow-hidden w-60 transition-transform hover:scale-105 cursor-pointer"
            style={{ background: colors.white[100] }}
            onClick={onClick}
        >
            {/* Imagem do imóvel */}
            <img
                src={image}
                alt="property"
                className="h-40 w-full object-cover rounded-t-lg rounded-b-lg"
            />
            {/* Conteúdo interno do card (texto e botões) */}
            <div className="p-3">
                {/* Preço do imóvel */}
                <p className="font-semibold text-[1.3em] mb-1" style={{ color: colors.black[500] }}>
                    {price}
                </p>
                {/* Tamanho do imóvel */}
                <span className="text-base block mb-4" style={{ color: colors.gray[500] }}>
          {size}
        </span>
                {/* Botões quartos e banheiros */}
                <div className="flex gap-2">
                    <button
                        className="text-xs px-3 py-1 rounded text-white"
                        style={{ background: colors.primary }}
                    >
                        {bedrooms} quartos
                    </button>
                    <button
                        className="text-xs px-3 py-1 rounded text-white"
                        style={{ background: colors.primary }}
                    >
                        {bathrooms} banheiros
                    </button>
                </div>
            </div>
        </div>
    )
}