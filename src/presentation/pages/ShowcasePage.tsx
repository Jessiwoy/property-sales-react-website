import { useState } from 'react'
import { Toolbar } from '../components/organisms/Toolbar'
import { BackgroundImageText } from '../components/molecules/BackgroundImageText'
import { ServiceBadge } from '../components/molecules/ServiceBadge'
import { PropertyCard } from '../components/molecules/PropertyCard'
import { PropertyModal } from '../components/organisms/PropertyModal'
import {PropertyType} from "../../shared/types/PropertyType.ts";
import data from '../../../data.json'


import imgBgHero from '../../assets/showcaseHero.png'
import residencial from '../../assets/pictures/residencial.png'
import comercial from '../../assets/pictures/comercial.png'
import hotel from '../../assets/pictures/hotel.png'
import {Footer} from "../components/organisms/Footer.tsx";
import {colors} from "../../shared/constant/colors.ts";

// Lista dos serviços que serão exibidos na seção "Nossos Serviços"
const services = [
    { image: residencial, title: 'Residenciais', count: '132 ofertas' },
    { image: comercial, title: 'Comerciais', count: '82 ofertas' },
    { image: hotel, title: 'Hotéis', count: '22 ofertas' },
]

// Conversão dos dados do JSON para objetos do tipo PropertyType
const properties: PropertyType[] = data.map((item) => ({
    image: item.image,
    price: item.price,
    size: `${item.size} m²`,
    info: [
        { label: 'quarto', value: String(item.bedrooms) },
        { label: 'banheiro', value: String(item.bathrooms) },
        { label: 'm²', value: String(item.size) },
    ],
}))

// Componente principal
export const ShowcasePage = () => {
    // Estados: controle do modal e da propriedade selecionada
    const [modalVisible, setModalVisible] = useState(false)
    const [selected, setSelected] = useState(properties[0])

    // Função para abrir o modal com detalhes da propriedade
    const openModal = (property: PropertyType) => {
        setSelected(property)
        setModalVisible(true)
    }

    return (
        <div className="min-h-screen flex flex-col ">
            {/* Barra de navegação */}
            <Toolbar showButtons />

            {/* Seção com imagem de fundo e texto de destaque */}
            <BackgroundImageText
                imageUrl={imgBgHero}
                text="Encontre as melhores casas, pontos comerciais e hotéis"
                screen="showroom"
            />
            {/* Layout principal da página */}
            <div className="layout flex-col items-center justify-between">
                {/* Nossos Serviços */}
                <section className="w-full py-12 px-6">
                    <h2
                        className="text-3xl mb-8"
                        style={{ color: colors.black[300], textAlign: 'left' }}
                    >
                        Nossos Serviços
                    </h2>

                    {/* Três tipos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-70 w-full">
                        {services.map((s, i) => (
                            <div className="flex justify-center" key={i}>
                                <ServiceBadge {...s} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Melhores oportunidades */}
                <section className="py-10 px-4">
                    <h2
                        className="text-3xl mb-6"
                        style={{ color: colors.black[300], textAlign: 'left' }}
                    >
                        Melhores oportunidades
                    </h2>

                    {/* Cards de propriedades */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
                        {properties.map((prop, i) => (
                            <PropertyCard
                                key={i}
                                image={prop.image}
                                price={prop.price}
                                size={prop.size}
                                bedrooms={parseInt(prop.info[0].value)}
                                bathrooms={parseInt(prop.info[1].value)}
                                onClick={() => openModal(prop)}
                            />
                        ))}
                    </div>
                </section>
            </div>

            <Footer />

            {/* Modal */}
            <PropertyModal
                visible={modalVisible}
                image={selected.image}
                price={selected.price}
                info={selected.info}
                onClose={() => setModalVisible(false)}
            />
        </div>
    )
}
