import React from 'react';
import '../components/header.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Header({ imagesrc, title, text, buttons }) {
    return (
        <header className="header-container">
            <img src={imagesrc} alt={title} className="header-image" />
            <div className="text-container">
                <h1 className="header-title">{title}</h1>
                <p className="header-text">{text}</p>
                {/* Renderiza botones */}
                <div className="button-group">
                    {buttons && buttons.map((button, index) => (
                        <button
                            key={index}
                            className="header-button"
                            onClick={button.onClick}
                            aria-label={button.text} // Nombre accesible para el botón
                        >
                            {button.image ? (
                                <img
                                    src={button.image}
                                    alt='imagenes' // Texto alternativo para la imagen
                                    className="button-image"
                                />
                            ) : (
                                <span>
                                    {button.text} <FaArrowUpRightFromSquare />
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
