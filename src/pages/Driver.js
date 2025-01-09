import React, { useEffect } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Article from '../components/Article'
import './home.css'
import imageDriver from '../assets/images/ima-hero-driver.avif'
import flex from '../assets/images/svg/flex.svg'
import money from '../assets/images/svg/money.svg'
import lock from '../assets/images/svg/lock.svg'
import requisitos from '../assets/images/ima-requisitos.avif'
import playstore from '../assets/images/playstore.webp'
import { openInNewTab } from '../utils/functions'

function Driver() {

    // useEffect para desplazarse hacia la parte superior
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // Se ejecuta solo al montar el componente

    return (
        <div>
            <Header
                imagesrc={imageDriver}
                title="Conduce a tu ritmo,
                gana tiempo y dinero"
                text="Descubre el destino de tus pasajeros antes de aceptar.
                Retira tus ganancias diariamente, tú tienes el control."
                buttons={[
                    {
                        image: playstore,
                        // text: "Reservar Ahora",
                        onClick: () => openInNewTab('https://play.google.com/store/search?q=monterrico+app+driver&c=apps&hl=es_PE&gl=US')
                    }
                ]}

            />
            <Section
                imageicon1={flex}
                title1="Flexibilidad horaria"
                text1="Con nuestro servicio, tú decides cuándo estás al volante. Sé el dueño de tu tiempo y disfruta de la flexibilidad para conducir cuando mejor te convenga."

                imageicon2={money}
                title2="Cange diario"
                text2="¿Necesitas ingresos extra? Cajea a diario de tus ganancias. Tu esfuerzo se traduce directamente en recompensas financieras ¡Así que gana a tu propio ritmo!"

                imageicon3={lock}
                title3="Seguridad y transparencia"
                text3="Llevarás clientes corporativos. Conoce el destino, planifica tu ruta y disfruta de un viaje tranquilo. Te ofrecemos la confianza que necesitas en cada trayecto. ¡Conduce con comodidad y seguridad!"
            />
            <Article
                section="Requisitos"
                title="¿Cómo soy parte de Taxi Monterrico?"
                text={[
                    "No tener antecedentes.",
                    "Vestimenta formal.",
                    "Botiquín y extintor siempre en el vehículo.",
                    "Vehículo en óptimas condiciones",
                    "máximo 8 años de antigüedad."
                ]}
                button="Más información"
                onButtonClick={() => openInNewTab('https://api.whatsapp.com/send/?phone=51924879402&type=phone_number')}
                img={requisitos}
                reverse={true}
            />
        </div>
    );
}
export default Driver