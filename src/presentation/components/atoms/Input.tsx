import {colors} from "../../../shared/constant/colors.ts";

// Declaração do componente funcional Input
export const Input = ({ ...props }) => {
    return (
        <input
            className="w-full rounded-full px-5 py-3 "
            style={{
                color: colors.black[1000],
                background: colors.white[300],
            }}
            {...props}
        />
    )
}