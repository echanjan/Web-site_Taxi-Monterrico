import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../pages/faq.css';
import imafaq from '../assets/images/ima-hero-faq.avif';
import { FaUser, FaBriefcase, FaCar, FaCompressAlt, FaExpandAlt } from 'react-icons/fa';

function Faq() {

    // useEffect para desplazarse hacia la parte superior
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // Se ejecuta solo al montar el componente

    const [activeTab, setActiveTab] = useState('Conductor');
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = {
        Pasajero: [
            {
                question: '¿Cómo puedo solicitar un viaje?',
                answer: 'Puede reservar un taxi corporativo a través de nuestra aplicación móvil, sitio web o llamando o escribiendo a nuestro servicio de atención al cliente.'
            },
            {
                question: '¿Cuáles son los métodos de pago aceptados?',
                answer: 'Aceptamos pagos en efectivo, yape, plin, o por abono a cuenta.'
            },
            {
                question: '¿Cómo puedo saber la tarifa antes del viaje?',
                answer: 'Puede conocer la tarifa estimada ingresando los detalles del viaje en nuestra aplicación o sitio web, o solicitarla al momento de comunicarse a nuestro servicio de atención al cliente.'
            },
            {
                question: '¿Ofrecen servicios de transporte para eventos corporativos o grupos grandes?',
                answer: 'Sí, proporcionamos servicios para eventos corporativos y grupos grandes. Le recomendamos que reserve con anticipación para garantizar la disponibilidad.'
            },
            {
                question: '¿Cuáles son las medidas de seguridad implementadas en sus taxis corporativos?',
                answer: 'Todos nuestros conductores están debidamente registrados y sometidos a verificaciones de antecedentes. Además, nuestros vehículos son inspeccionados regularmente para garantizar la seguridad de nuestros clientes.'
            },
            {
                question: '¿Ofrecen servicios de taxi corporativo en zona fuera de Lima?',
                answer: 'Sí, ofrecemos servicios fuera de Lima. Le recomendamos que reserve con anticipación para garantizar la disponibilidad, o ponerse en contacto con nuestro servicio al cliente para obtener más información.'
            },
            {
                question: '¿Es posible programar un viaje con antelación?',
                answer: 'Sí, ofrecemos la opción de programar viajes con antelación a través de nuestra aplicación o llamando o escribiendo a nuestro servicio de atención al cliente.'
            },
            {
                question: '¿Cómo puedo obtener un recibo o factura por mis viajes?',
                answer: 'Un recibo se enviará automáticamente a su correo electrónico después de cada viaje en un plazo no mayor a 24 horas luego de finalizado su servicio.'
            },
            {
                question: '¿Qué hacer en caso de objetos olvidados en el taxi?',
                answer: 'Si olvida algo en el taxi, comuníquese con nuestro servicio de atención al cliente lo antes posible. Haremos todo lo posible para localizar y devolver sus pertenencias.'
            },
        ],
        Corporativo: [
            {
                question: '¿Ofrecen crédito corporativo?',
                answer: 'Sí, nos especializamos en servicios de traslado corporativo y proporcionamos crédito a nuestros clientes.'
            },
            {
                question: '¿Cuáles son los requisitos para obtener crédito corporativo?',
                answer: 'Para adquirir crédito corporativo con Monterrico, es necesario contar con una ficha RUC. Es importante destacar que no debe existir cobranza coactiva.'
            },
            {
                question: '¿Cobran tarifas por hora dinámica?',
                answer: 'No cobramos tarifas por hora dinámica. Ofrecemos descuentos para servicios solicitados en horas no pico, así como para aquellos realizados a través de nuestra intranet o aplicación disponible en las tiendas de aplicaciones (Play Store y App Store) bajo el nombre de Taxi Monterrico.'
            },
            {
                question: '¿Están operativos las 24 horas y los feriados?',
                answer: 'Sí, puedes solicitar nuestros servicios en cualquier momento y día del año. Contamos con asesores disponibles las 24 horas, los 365 días del año.'
            },
            {
                question: '¿Ofrecen traslados a balnearios de Lima?',
                answer: 'Sí, contamos con unidades disponibles en toda la ciudad de Lima.'
            },
            {
                question: '¿Realizan servicios de Courier?',
                answer: 'Sí, todas nuestras unidades están equipadas y nuestros conductores están capacitados para brindar servicios de Courier. Ten en cuenta que el peso máximo sin costo adicional es de 50 kg.'
            },
            {
                question: '¿Cuáles son los tipos de vehículos disponibles?',
                answer: 'Contamos con diversas categorías para satisfacer cualquier solicitud: Standard, Vip, Elite, XL, Van'
            },
            {
                question: '¿Cuántos conductores tienen disponibles?',
                answer: 'Actualmente, disponemos de más de 600 socios repartidos en Lima Metropolitana y Callao.'
            },
            {
                question: '¿Ofrecen vehículos con lunas polarizadas?',
                answer: 'Sí, en las categorías Vip, Elite y XL encontrarás vehículos con lunas polarizadas.'
            },
            {
                question: '¿Brindan servicios a provincias?',
                answer: 'Sí, nuestros conductores están capacitados para realizar viajes de larga distancia.'
            },
        ],
        Conductor: [
            {
                question: '¿Cuáles son las modalidades u horarios de trabajo?',
                answer: 'Actualmente no contamos con modalidades u horarios de trabajo, es libre y el conductor se conecta a la hora que cree más conveniente para hacer su ruta.'
            },
            {
                question: '¿Cómo instalo el aplicativo móvil?',
                answer: 'Puedes descargar el aplicativo desde la tienda de aplicaciones de tu dispositivo, ya sea Google Play Store o Apple App Store.'
            },
            {
                question: '¿Cómo descargo el inductivo y/o manual sobre el uso de la app?',
                answer: 'Actualmente nos encontramos estructurando el manual para uso del app por lo que las inducciones o capacitaciones con respecto al app, las realiza el mismo personal interno, sea flota o monitoreo.'
            },
            {
                question: '¿Si tengo gastos como parqueo o peaje los tengo que pagar yo?',
                answer: 'Si, los costos de peajes y parqueos los paga el mismo conductor al momento de realizar el servicio y al finalizar el servicio, se agregan en los costos adicionales para que luego sean devueltos al conductor de forma integra. NOTA: El porcentaje de descuento aplicado a los servicios, es sobre la tarifa bruta de los servicios mas no del total con peajes incluidos, a los peajes o parqueos no se les aplica porcentaje.'
            },
            {
                question: '¿Cómo adiciono los conceptos de parqueo y peaje que haya asumido a través de la app?',
                answer: 'Mientras vas en servicio, se tiene la opción de “COSTOS” en el app para adicionar los montos correspondientes a parqueo , peaje y tiempo de espera, adicionalmente al intentar finalizar el servicio, se muestra un mensaje en forma de pregunta como recordatorio para ingresar costos adicionales.'
            },
            {
                question: '¿Qué es la auto planificación?',
                answer: 'La autoplanificacion es una herramienta innovadora que hemos implementado para que los conductores puedan ver los servicios con anticipación y en determinados horarios y asi puedan planificar su ruta de trabajo y eficientizar su tiempo, esta opción permite tomar los servicios en horas especificas donde abre la planificación y puedes ver los servicios disponibles.'
            },
            {
                question: '¿Cómo efectuó la auto planificación?',
                answer: 'En la aplicación tienes una opción que se llama AUTOPLANIFICACION, ingresando a ella en los horarios estipulados (consultar al área de flota los horarios de planificacion), se pueden visualizar y tomar los servicios disponibles.'
            },
            {
                question: 'Como conductor, ¿Qué vestimenta debo usar?',
                answer: 'Antes se mantenía el uniforme que constaba de camisa blanca, pantalón de vestir negro, zapatos de vestir negro, saco y corbata si fuese posible y se mantiene en gran parte esa vestimenta pero también se da la opción de variar los colores siempre y cuando la vestimenta sea formal.'
            },
            {
                question: '¿Cuáles son las condiciones de presentación y seguridad del vehículo?',
                answer: 'El vehículo debe estar en excelentes condiciones, sin raspones o abolladuras y con los implementos de seguridad mínimos para brindar servicio de movilidad, aire acondicionado, cinturón de seguridad, botiquin de primeros auxilios, extintor, etc.'
            },
            {
                question: '¿Cuántos servicios puedo realizar al día?',
                answer: 'La cantidad de servicios al dia depende en gran medida de la experiencia del conductor, la disponibilidad que tenga para estar conectado, el buen uso del app para ingresando a los horarios de planificación y estando atentos a los servicios al momento por postulación.'
            },
            {
                question: '¿Cómo debo efectuar la liquidación electrónica?',
                answer: 'El área de facturación, en cada quincena, facilita los montos a facturar ya sean con igv o sin igv, de los cuales, con tu contador o tu de manera personal, debes realizar las facturas solicitadas, cargarlas al app y adicional, si fuese posible, enviarlo al whatsapp de facturación para que quede constancia.'
            },
            {
                question: '¿Cuánto es la comisión por canje y/o liquidación electrónica?',
                answer: 'La liquidación quincenal tiene 0% de comisión adicional, mientras que la liquidación o canje diario tiene un adicional de 3%.'
            },
            {
                question: '¿Cómo envió las facturas emitidas a través de la app?',
                answer: 'Las facturas emitidas deben ser cargadas al app en la opción “FACTURACION” adicionalmente a ello, se tiene el whatsapp del área de facturación por la que pueden enviar las facturas para sustentar las facturas cargadas al app.'
            },
            {
                question: '¿Cuánto es el tiempo de espera por servicio al llegar al punto de origen?',
                answer: 'El tiempo de espera puede variar según el lugar donde se ubique el punto de inicio del servicio pero por lo general el tiempo de espera de cortesia del usuario es de 10 minutos, después de eso, se comienza a considerar todo como tiempo de espera adicional y también tiene un costo adicional.'
            },
            {
                question: '¿Qué es el desplazamiento y en que caso se aplica?',
                answer: 'El desplazamiento o falso flete es la acción de asumir un costo por la cobertura de un servicio en el que el usuario no aborda la unidad, los desplazamientos se dan por distintas situaciones y al no salir el usuario y la unidad estar ubicada de forma puntual, se reconoce un monto por haber coberturado el servicio de forma puntual. Los montos de desplazamiento varian según el lugar donde se encuentra el punto de inicio: Zona urbana S/ 10.00, zona interurbana S/ 20.00 y zona periférica o aeropuerto S/ 30.00. Son los montos de desplazamiento sin realizar el servicio siempre y cuando el conductor se haya ubicado de manera puntual y se cancele el servicio, etc.'
            },
            {
                question: '¿Cuánto es la comisión por canje y/o liquidación electrónica?',
                answer: 'La liquidación quincenal tiene 0% de comisión adicional, mientras que la liquidación o canje diario tiene un adicional de 3%.'
            },
        ]
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveIndex(null); // Resetea el índice activo cuando se cambia de pestaña
    };

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <Header
                imagesrc={imafaq}
                title="Ten la tranquilidad de un viaje seguro"
                text="Desde que subes al vehículo hasta llegar a tu destino, ten la tranquilidad de un viaje sin inconvenientes."
            />

            <div className="faq-tabs">
                <button className={`tab-button ${activeTab === 'Pasajero' ? 'active' : ''}`} onClick={() => handleTabClick('Pasajero')}>
                    <FaUser />
                    <p className='text-faq'>Pasajero</p>
                </button>
                <button className={`tab-button ${activeTab === 'Corporativo' ? 'active' : ''}`} onClick={() => handleTabClick('Corporativo')}>
                    <FaBriefcase />
                    <p className='text-faq'>Corporativo</p>
                </button>
                <button className={`tab-button ${activeTab === 'Conductor' ? 'active' : ''}`} onClick={() => handleTabClick('Conductor')}>
                    <FaCar />
                    <p className='text-faq'>Conductor</p>
                </button>
            </div>

            <div className="faq-container">
                {faqs[activeTab].map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            <span className="faq-icon">
                                {activeIndex === index ? (
                                    <FaCompressAlt className="iconCompress" />
                                ) : (
                                    <FaExpandAlt className="iconExpand" />
                                )}
                            </span>
                            {faq.question}
                        </div>
                        <div
                            className={`faq-answer ${activeIndex === index ? "expanded" : ""}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Faq;
