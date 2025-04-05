import {colors} from "../../../shared/constant/colors.ts";

interface ServiceBadgeProps {
    image: string
    title: string
    count: string
}

export const ServiceBadge = ({ image, title, count }: ServiceBadgeProps) => {
    return (
        // Container principal com layout em coluna, centralizado e com largura fixa.
        <div className="flex flex-col items-center w-40 text-center gap-2">
            <div className="w-[14em] h-[14em] rounded-full overflow-hidden shadow-md">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <p className="text-base" style={{ color: colors.black[400] }}>{title}</p>
            <span className="text-xs" style={{ color: colors.gray[500] }}>{count}</span>
        </div>
    )
}
