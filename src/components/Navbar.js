import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';
import logotipo from '../assets/images/192x192_2.png';
import { openInNewTab, scrollToSection, useNavigation } from '../utils/functions';
import { TbMenu2, TbX, TbUserCircle } from "react-icons/tb";

function Navbar() {
    const { goToSection } = useNavigation();
    const [menuOpen, setMenuOpen] = useState(false); // Estado del menú

    const handleContactClick = () => {
        if (window.location.pathname === '/corporate') {
            scrollToSection('formContact');
        } else {
            goToSection('/corporate', 'formContact');
        }
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev); // Alterna el estado del menú
    };

    return (
        <nav className="navbar">
            <Link to="/" className='navbar-logo'>
                <img src={logotipo} alt="Logotipo Taxi Monterrico" className='logotipo-taximonterrico' />
            </Link>
            {/* Menú hamburguesa */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                {menuOpen ? <TbX size={24} /> : <TbMenu2 size={24} />} 
            </div>
            <ul className={`navbar-links-responsive ${menuOpen ? 'menu-open' : ''}`}>
                <li>
                    <Link to="/corporate" onClick={toggleMenu}>Corporativo</Link>
                </li>
                <li>
                    <Link to="/passenger" onClick={toggleMenu}>Pasajero</Link>
                </li>
                <li>
                    <Link to="/driver" onClick={toggleMenu}>Conductor</Link>
                </li>
            </ul>
            <Link to="/" className='navbar-logo-resposive'>
                <img src={logotipo} alt="Logotipo Taxi Monterrico" className='logotipo-taximonterrico' />
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
                <ul className='navbar-buttons-responsive'>
                    <li>
                        <Link className='intranet-button-resposive' onClick={() => openInNewTab('https://intranet.monterrico.app/')}><TbUserCircle /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
