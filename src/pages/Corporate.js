import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Section from '../components/Section';
import Article from '../components/Article';
import './corporate.css';
import imageCorporate from '../assets/images/ima-hero-corporate.avif';
import rules from '../assets/images/svg/rules.svg';
import control from '../assets/images/svg/control.svg';
import vip from '../assets/images/svg/vip.svg';
import agenda from '../assets/images/ima-corporate2.avif';
import usuarios from '../assets/images/ima-corporate1.avif';
import logo1 from '../assets/images/3m.webp';
import logo2 from '../assets/images/abb.webp';
import logo3 from '../assets/images/bbva.webp';
import logo4 from '../assets/images/epiroc.webp';
import logo5 from '../assets/images/flsmidth.webp';
import logo6 from '../assets/images/hudbay.webp';
import logo7 from '../assets/images/latam.webp';
import logo8 from '../assets/images/scania.webp';
import logo9 from '../assets/images/telefonica.webp';
import logo10 from '../assets/images/tke.webp';
import contacta from '../assets/images/ima-contacta.avif';
import CircularProgress from '@mui/material/CircularProgress';
import Swal from 'sweetalert2'
import { openInNewTab, scrollToSection } from '../utils/functions';

function Corporate() {
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar el spinner
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        empresa: '',
    });

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const handleInputChange = (e) => {
        const { placeholder, value } = e.target;
        const fieldName = placeholder.toLowerCase();
        setFormData((prev) => ({
            ...prev,
            [fieldName]: value,
        }));
    };

    const handleSubmit = async () => {
        const { nombre, apellido, correo, celular, empresa } = formData;

        // Validación básica de los campos
        if (!nombre || !apellido || !correo || !celular || !empresa) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        const textMessage = `Hola, soy ${nombre} ${apellido} de la empresa ${empresa}, mi correo corporativo es ${correo} y mi número ${celular}`;
        const apiBody = {
            number: `51${celular}`, // Número con código de país
            text: textMessage,
        };

        setIsLoading(true); // Activa el spinner

        try {
            const response = await axios.post(
                'https://wsp.monterrico.app/message/sendText/Soporte',
                apiBody,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'apiKey': 'D435F2FA3565-49E3-97EE-A6DD7A567AF0', // API Key en el encabezado
                    },
                }
            );

            setIsLoading(false); // Desactiva el spinner

            Swal.fire({
                position: "center",
                icon: "success",
                title: "¡Enviado!",
                text: "Gracias por comunicarte con Taxi Monterrico, nos contactaremos lo más pronto posible",
                showConfirmButton: false,
                timer: 3000
            }).then(() => {
                // Limpia el formulario después del Swal
                setFormData({
                    nombre: '',
                    apellido: '',
                    correo: '',
                    celular: '',
                    empresa: '',
                });
            });


        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            setIsLoading(false); // Desactiva el spinner
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al enviar el mensaje. Por favor, intenta de nuevo.',
            });
        }
    };

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
                        onClick: () => scrollToSection('formContact'),
                    },
                    {
                        text: "Intranet",
                        onClick: () => openInNewTab('https://intranet.monterrico.app'),
                    },
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
                headingLevel={2}
            />
            <div className='content-logo'>
                <div className='box-logo'>
                    <h2 className='title-logo'>100+ clientes</h2>
                    {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10].map((logo, index) => (
                        <img className='logo' src={logo} alt={`Logo ${index + 1}`} key={index} />
                    ))}
                </div>
            </div>
            <Article
                section="Explora"
                title="Soluciones de gestión y control"
                text={[
                    "Establece reglas y restricciones de uso y monto.",
                    "Gestiona perfiles de usuarios.",
                    "Crea centros de costos y áreas específicas.",
                    "Control preciso de los gastos corporativos.",
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
                    "Categorías que se ajustan a los requerimientos.",
                ]}
                button="Reservar viaje"
                onButtonClick={() => openInNewTab('https://intranet.monterrico.app/')}
                img={usuarios}
            />
            <div className='form-contact' id='formContact'>
                <div className='box-text-form'>
                    <h2>Contáctanos</h2>
                    <p>
                        En Taxi Monterrico, brindamos soluciones personalizadas para tus necesidades de transporte corporativo. Completa el formulario y un agente te contactará pronto para optimizar la gestión de tu empresa.
                    </p>
                    <h3>¡Comunícate con nosotros hoy!</h3>
                </div>
                <div className='box-form'>
                    <div className='content-input'>
                        <input
                            className='input-form'
                            type="text"
                            placeholder="Nombre"
                            value={formData.nombre} // Vinculado al estado
                            onChange={handleInputChange}
                        />
                        <input
                            className='input-form'
                            type="text"
                            placeholder="Apellido"
                            value={formData.apellido} // Vinculado al estado
                            onChange={handleInputChange}
                        />
                        <input
                            className='input-form'
                            type="text"
                            placeholder="Correo"
                            value={formData.correo} // Vinculado al estado
                            onChange={handleInputChange}
                        />
                        <input
                            className='input-form'
                            type="text"
                            placeholder="Celular"
                            value={formData.celular} // Vinculado al estado
                            onChange={handleInputChange}
                        />
                        <input
                            className='input-form'
                            type="text"
                            placeholder="Empresa"
                            value={formData.empresa} // Vinculado al estado
                            onChange={handleInputChange}
                        />
                        <button className='button-form' onClick={handleSubmit}>
                            {isLoading ? <CircularProgress size={20} sx={{ color: '#ffffff', marginRight: '10px' }} /> : 'Enviar'}
                        </button>
                    </div>
                </div>
                <div className='box-imagen-form'>
                    <img src={contacta} className='image-form' alt='contacta' />
                </div>
            </div>
        </div>
    );
}

export default Corporate;
