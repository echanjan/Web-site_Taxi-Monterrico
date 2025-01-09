import React, { useEffect } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Article from '../components/Article'
import Card from '../components/Card'
import './passenger.css'
import imagePassenger from '../assets/images/ima-hero-passenger.avif'
import protectusr from '../assets/images/svg/protectusr.svg'
import clock from '../assets/images/svg/clock.svg'
import support from '../assets/images/svg/support.svg'
import aeropuerto from '../assets/images/ima-aeropuerto.avif'
import eventos from '../assets/images/ima-eventos.avif'
import standard from '../assets/images/standard.webp'
import vip from '../assets/images/vip.webp'
import elite from '../assets/images/elite.webp'
import van from '../assets/images/van.webp'
import xl from '../assets/images/xl.webp'
import courier from '../assets/images/courier.webp'
import playstore from '../assets/images/playstore.webp'
import appstore from '../assets/images/appstore.webp'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { openInNewTab } from '../utils/functions'


function Passenger() {

  // useEffect para desplazarse hacia la parte superior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); // Se ejecuta solo al montar el componente

  return (
    <div>
      <Header
        imagesrc={imagePassenger}
        title="Explora la ciudad sin preocupaciones"
        text="Descubre la libertad de explorar sin preocupaciones,
        asegurando tu comodidad y seguridad en cada viaje."
        buttons={[
          {
            image: playstore,
            // text: "Reservar Ahora",
            onClick: () => openInNewTab('https://play.google.com/store/apps/details?id=tmsystem.com.tmsystemclient&hl=es_PE&gl=US')
          },
          {
            image: appstore,
            onClick: () => openInNewTab('https://apps.apple.com/us/app/taxi-monterrico/id1471171908')
          }
        ]}
      />
      <Section
        imageicon1={protectusr}
        title1="Tu seguridad es prioridad"
        text1="En Taxi Monterrico, cuidamos tu bienestar. Sigue o comparte tu ubicación y estado de viaje para viajar con tranquilidad."

        imageicon2={clock}
        title2="Reserva viajes"
        text2="¿Necesitas un taxi en cualquier momento del año? Programa tu viaje sin preocupaciones y llega cómodamente a tu destino."

        imageicon3={support}
        title3="Soporte las 24 horas"
        text3="Nuestra central telefónica (01) 611-5555 está lista para ayudarte en cualquier momento. ¡Estamos aquí para lo que necesites!"
      />
      <Article
        section="Aeropuerto"
        title="Desde tu puerta o sala de espera"
        text={[
          "Viajes seguros desde y hacia el aeropuerto.",
          "Cubrimos tanto despegues como aterrizajes.",
          "Servicio confiable para todos los traslados."
        ]}
        button="Ingresa a la web"
        onButtonClick={() => openInNewTab('https://intranet.monterrico.app/')}
        img={aeropuerto}
        reverse={true}
      />
      <Article
        section="Eventos"
        title="Celebra, nosotros nos encargamos del viaje"
        text={[
          "Coordinación directa con central.",
          "Transporte de ida y vuelta.",
          "Reserva fácilmente a través de la app."
        ]}
        button="Reservar viaje"
        onButtonClick={() => openInNewTab('https://intranet.monterrico.app/')}
        img={eventos}
      />
      <div className='box-type-car'>
        <div className='arrow-card'>
          <IoIosArrowBack />
        </div>
        <div className='type-car'>
          <h1 className='title-type-car'>Elige como viajar</h1>
          <Card
            image={standard}
            title="Standard"
            details="1-4 pax"
            text="Viajes de tarifa regular, cualquier categoría."
          />
          <Card
            image={vip}
            title="Vip"
            details="1-4 pax"
            text="Viajes en vehículos máx amplios y cómodos."
          />
          <Card
            image={elite}
            title="Elite"
            details="1-4 pax"
            text="Vehículos SUV, máx espacio en la maletera."
          />
          <Card
            image={xl}
            title="XL"
            details="1-6 pax"
            text="Viaje cómodo cuando el grupo sea más grande."
          />
          <Card
            image={van}
            title="Van"
            details="1-12 pax"
            text="Si no entrar en un XL, una van es la solución"
          />
          <Card
            image={courier}
            title="Courier"
            details="50kg máx"
            text="Envía lo que desees, a cualquier parte."
          />
        </div>
        <div className='arrow-card'>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  )
}

export default Passenger