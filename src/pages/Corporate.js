import React, { useEffect } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Article from '../components/Article'
import './corporate.css'
import imageCorporate from '../assets/images/ima-hero-corporate.avif'
import rules from '../assets/images/svg/rules.svg'
import control from '../assets/images/svg/control.svg'
import vip from '../assets/images/svg/vip.svg'
import agenda from '../assets/images/ima-corporate2.avif'
import usuarios from '../assets/images/ima-corporate1.avif'
import logo1 from '../assets/images/3m.webp'
import logo2 from '../assets/images/abb.webp'
import logo3 from '../assets/images/bbva.webp'
import logo4 from '../assets/images/epiroc.webp'
import logo5 from '../assets/images/flsmidth.webp'
import logo6 from '../assets/images/hudbay.webp'
import logo7 from '../assets/images/latam.webp'
import logo8 from '../assets/images/scania.webp'
import logo9 from '../assets/images/telefonica.webp'
import logo10 from '../assets/images/tke.webp'
import contacta from '../assets/images/ima-contacta.avif'
import { openInNewTab, scrollToSection } from '../utils/functions';

function Corporate() {

    // const { goToSection } = useNavigation();

    // useEffect para desplazarse hacia la parte superior
    useEffect(() => {
        // Desplazarse a la parte superior al cargar la página
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Si hay un hash en la URL, desplázate a ese elemento
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <div>
            <Header
                imagesrc={imageCorporate}
                title="Optimiza tu gestión"
                text="Desde nuestra plataforma única,
                toma el control total de tus servicios de transporte."
                buttons={[
                    {
                        text: "Contáctanos",
                        // text: "Reservar Ahora",
                        onClick: () => scrollToSection('formContact')
                    },
                    {
                        text: "Intranet",
                        // text: "Reservar Ahora",
                        onClick: () => openInNewTab('https://intranet.monterrico.app')
                    }
                ]}

            />
            <Section
                imageicon1={rules}
                title1="Diseña tus propias reglas"
                text1="Registra usuarios, controla servicios y administra centros de costos y áreas según tus necesidades únicas. Personalizar nuestros servicios de acuerdo con tus requerimientos."

                imageicon2={control}
                title2="Controla tus gastos"
                text2="Mantén un seguimiento detallado de los consumos de tu empresa, establece límites de uso y cuenta con las herramientas necesarias para un control efectivo."

                imageicon3={vip}
                title3="Servicio personalizado"
                text3="Disfruta de atención exclusiva de ejecutivos dedicados a tu empresa, diseñado para facilitar tu experiencia y asegurar que aproveches al máximo nuestros servicios."

                headingLevel={2} // Ajusta el nivel según el contexto
            />
            <div className='content-logo'>
                <div className='box-logo'>
                    <h2 className='title-logo'>100+ clientes</h2>
                    <img className='logo' src={logo1} alt="Logo 1" />
                    <img className='logo' src={logo2} alt="Logo 2" />
                    <img className='logo' src={logo3} alt="Logo 3" />
                    <img className='logo' src={logo4} alt="Logo 4" />
                    <img className='logo' src={logo5} alt="Logo 5" />
                    <img className='logo' src={logo6} alt="Logo 6" />
                    <img className='logo' src={logo7} alt="Logo 7" />
                    <img className='logo' src={logo8} alt="Logo 8" />
                    <img className='logo' src={logo9} alt="Logo 9" />
                    <img className='logo' src={logo10} alt="Logo 10" />
                </div>
            </div>
            <Article
                section="Explora"
                title="Soluciones de gestión y control"
                text={[
                    "Establece reglas y restricciones de uso y monto.",
                    "Gestiona perfiles de usuarios.",
                    "Crea centros de costos y áreas específicas.",
                    "Control preciso de los gastos corporativos."
                ]}
                button="Más información"
                onButtonClick={() => scrollToSection('formContact')}
                img={agenda}
                reverse={true}
            />
            <Article
                section="Descubre"
                title="Servicios exclusivos"
                text={[
                    "Adaptable a todas las necesidades empresariales.",
                    "Reservas, por horas, courier y gestión de eventos.",
                    "Flexibilidad en el tipo de servicio disponible.",
                    "Categorías que se ajustan a los requerimientos."
                ]}
                button="Reservar viaje"
                onButtonClick={() => openInNewTab('https://intranet.monterrico.app/')}
                img={usuarios}
            />
            <div className='form-contact' id='formContact'>
                <div className='box-text-form'>
                    <h2>Contáctanos</h2>
                    <p>
                        En Monterrico App, brindamos soluciones personalizadas para tus necesidades de transporte corporativo. Completa el formulario y un agente te contactará pronto para optimizar la gestión de tu empresa.
                    </p>
                    <h3>¡Comunícate con nosotros hoy!</h3>
                </div>
                <div className='box-form'>
                    <div className='content-input'>
                        <input className='input-form' type="text" placeholder="Nombre" />
                        <input className='input-form' type="text" placeholder="Apellido" />
                        <input className='input-form' type="text" placeholder="Correo corporativo" />
                        <input className='input-form' type="text" placeholder="Celular" />
                        <input className='input-form' type="text" placeholder="Empresa" />
                        <button className='button-form'>Enviar</button>
                    </div>
                </div>
                <div className='box-imagen-form'>
                    <img src={contacta} className='image-form' alt='contacta'></img>
                </div>
            </div>
        </div>
    );
}

export default Corporate;