import React, { useEffect } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Article from '../components/Article'
import './home.css'
import empresas from '../assets/images/ima-home1.avif'
import imageHome from '../assets/images/ima-hero-home.avif'
import shield from '../assets/images/svg/shield.svg'
import details from '../assets/images/svg/details.svg'
import experience from '../assets/images/svg/experience.svg'
import playstore from '../assets/images/playstore.webp'
import appstore from '../assets/images/appstore.webp'
import { openInNewTab, useNavigation } from '../utils/functions';

function Home() {

    const { goToSection } = useNavigation();

    // useEffect para desplazarse hacia la parte superior
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // Se ejecuta solo al montar el componente

    return (
        <div>
            <Header
                imagesrc={imageHome}
                title="Viaja de forma segura y cómoda"
                text="Recorre la ciudad a tu manera. Descarga el app"
                buttons={[
                    {
                        image: playstore,
                        // text: "Reservar Ahora",
                        ariaLabel: "Descargar desde Google Play Store", // Nombre accesible
                        onClick: () => openInNewTab('https://play.google.com/store/apps/details?id=tmsystem.com.tmsystemclient&hl=es_PE&gl=US')
                    },
                    {
                        image: appstore,
                        ariaLabel: "Descargar desde App Store", // Nombre accesible
                        onClick: () => openInNewTab('https://apps.apple.com/us/app/taxi-monterrico/id1471171908')
                    }
                ]}
            />
            <Section
                imageicon1={shield}
                title1="Tu seguridad, nuestra prioridad"
                text1="Reclutamos a los mejores profesionales al volante. Nuestros conductores pasan por un examen psicológico y verificación de antecedentes."

                imageicon2={details}
                title2="Queremos tu comodidad"
                text2="Nuestros vehículos cumplen con una estricta inspección interna y externa, de este modo cuidamos cada detalle de tu experiencia."

                imageicon3={experience}
                title3="Nuestros años nos avalan"
                text3="Con más de 27 años de vida, hemos creado un sistema propio, el cual nos permite brindarte un servicio de excelencia pre y post solicitud."
            />
            <Article
                section="Empresas"
                // icon={<FaUserGear />}
                title="Soluciones integrales para tu empresa"
                text={[
                    "Configura todo desde una sola plataforma.",
                    "Establece restricciones y horarios.",
                    "Controla los gastos de manera eficiente.",
                    "Verifica los viajes en tiempo real."
                ]}
                button="Más información"
                onButtonClick={() => goToSection('/corporate', 'formContact')}
                img={empresas}
                reverse={true}
            />
        </div>
    );
}

export default Home;