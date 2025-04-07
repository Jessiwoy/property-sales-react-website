import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import image from "../../assets/not-found.png"
import { Toolbar } from "../components/organisms/Toolbar.tsx"
import { Button } from "../components/atoms/Button.tsx"
import {colors} from "../../shared/constant/colors.ts";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Toolbar />

            <main className="flex flex-col lg:flex-row items-center justify-center flex-grow px-8 py-12 gap-10">
                {/* Esquerda */}
                <div className="flex flex-col gap-4 max-w-md w-full items-start">
                    <p className="font-semibold text-xl" style={{ color: colors.primary }}>Oops...</p>
                    <h1 className="text-5xl font-extrabold" style={{ color: "#2E2E2E" }}>Página</h1>
                    <h2 className="text-5xl font-extrabold" style={{ color: "#2E2E2E" }}>em construção</h2>
                    <p className="text-xs text-gray-400 mt-2">Estamos trabalhando, em breve retorne aqui.</p>

                    <div className="w-full flex justify-left">
                        <Button className="mt-6 w-[80%] px-12 py-3 text-white rounded-full text-base">Voltar</Button>
                    </div>
                </div>

                {/* Divisor */}
                <div className="hidden lg:block h-80 w-[1px] bg-gray-300 mx-6" />

                {/* Direita */}
                <div className="mt-10 lg:mt-0">
                    <img src={image} alt="Em construção" className="w-[300px] lg:w-[400px]" />
                </div>
            </main>

            {/* Footer social */}
            <footer className="w-full flex justify-start items-center gap-6 px-60 pb-10">
                <a
                    href="https://www.facebook.com/compass.uol"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookSquare size={22} className="text-black cursor-pointer" />
                </a>

                <a
                    href="https://www.instagram.com/compass.uol/?hl=pt-br"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram size={18} className="text-black cursor-pointer" />
                </a>

                <a
                    href="https://www.youtube.com/c/Compassuol"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube size={18} className="text-black cursor-pointer" />
                </a>

                <a
                    href="https://x.com/compassuol"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTwitter size={18} className="text-black cursor-pointer hover:text-blue-600" />
                </a>
            </footer>
        </div>
    )
}

export default NotFoundPage
