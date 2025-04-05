import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaChevronUp,
} from 'react-icons/fa'
import {colors} from "../../../shared/constant/colors.ts";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="w-full px-8 py-10 flex justify-between items-start text-white text-sm relative"
                style={{ backgroundColor: colors.black[600] }}>
            {/* Coluna Contato */}
            <div className="layout flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="text-base mb-4 " style={{ color: colors.primary }}>
                        Contato
                    </h3>
                    <p>agencia_batatinha@contato</p>
                    <p>(99) 99999-9999</p>

                    <div className="flex gap-4 mt-4 text-xl text-white"
                         style={{ color: colors.gray[500] }}>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaYoutube />
                        <FaTwitter />
                    </div>
                </div>

                {/* Texto central */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-4 text-center text-white text-sm">
                    Feito com ♥ por Jessica Woytuski - Todos os Direitos Reservados
                </div>

                {/* Botão scroll top */}
                <button
                    onClick={scrollToTop}
                    className="bg-white text-black p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                    <FaChevronUp />
                </button>
            </div>
        </footer>
    )
}
