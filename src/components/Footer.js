import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Importa el CSS de AOS
import { Link } from 'react-router-dom';
import '../components/footer.css';
import logotipoFooter from '../assets/images/logotipoTaxiMonterrico_Negativo.webp';

function Footer() {
    return (
        <footer className="footer max-width">
            <div className='footer1'>
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logotipoFooter} alt="Logotipo Taxi Monterrico" className='logotipo-taximonterrico-footer' />
                    </Link>
                </div>
                <div className='box-footer'>
                    <h4>Servicios</h4>
                    <ul className="footer-links">
                        <li>
                            <Link to="/corporate">Pasajero</Link>
                        </li>
                        <li>
                            <Link to="/passenger">Corporativo</Link>
                        </li>
                        <li>
                            <Link to="/driver">Conductor</Link>
                        </li>
                        <li>
                            <Link to="/faq">Preguntas frecuentes</Link>
                        </li>
                        <li>
                            <Link to="/suggestions">Reclamos y sugerencias</Link>
                        </li>
                    </ul>
                </div>
                <div className='box-footer'>
                    <h4>Contacto</h4>
                    <ul className="footer-links">
                        <li>
                            <h4>Visitanos</h4>
                        </li>
                        <li>
                            Av Prolongacion Iquitos 2299, Lince, Lima
                        </li>
                        <li>
                            <h4>¿Necesitas ayuda?</h4>
                        </li>
                        <li>
                            (01) 611-5555
                        </li>
                        <li>
                            <h4>Correo electrónico</h4>
                        </li>
                        <li>
                            servicios@taximonterrico.com
                        </li>
                    </ul>
                </div>
            </div>
            <div className='line'>
            </div>
            <div className='footer2'>
                <ul className='footer-conditions' >
                    <li>
                        Taxi Monterrico 2024 todos los derechos reservados.
                    </li>
                    <li>
                        <Link to="/policy">Politica de privacidad</Link>
                    </li>
                    {/* <li>
                        <Link to="/terms">Términos y condiciones</Link>
                    </li> */}
                </ul>

            </div>
        </footer>
    );
}

export default Footer;
