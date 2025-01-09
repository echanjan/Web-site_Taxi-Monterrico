import React from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';
import logotipo from '../assets/images/logotipoTaxiMonterrico.png';
import { openInNewTab, scrollToSection, useNavigation } from '../utils/functions';

function Navbar() {

    const { goToSection } = useNavigation();

    const handleContactClick = () => {
        if (window.location.pathname === '/corporate') {
            scrollToSection('formContact')
        } else {
            goToSection('/corporate', 'formContact')
        }
    }

    return (
        <nav className="navbar">
            <Link to="/" className='navbar-logo'>
                <img src={logotipo} alt="Logotipo Taxi Monterrico" className='logotipo-monterricoapp' />
            </Link>
            <ul className="navbar-links">
                <li>
                    <Link to="/corporate">Corporativo</Link>
                </li>
                <li>
                    <Link to="/passenger">Pasajero</Link>
                </li>
                <li>
                    <Link to="/driver">Conductor</Link>
                </li>
            </ul>
            <div className='intranet'>
                <ul className='navbar-buttons'>
                    <li>
                        <Link className='intranet-button' onClick={() => openInNewTab('https://intranet.monterrico.app/')}>Intranet</Link>
                    </li>
                    <li>
                        <button className='contact-button' onClick={handleContactClick}>Contáctanos</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
