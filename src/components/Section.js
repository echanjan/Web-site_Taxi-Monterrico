import React from 'react';
import '../components/section.css';

function Section({
    imageicon1, title1, text1,
    imageicon2, title2, text2,
    imageicon3, title3, text3,
    headingLevel = 3 // Nivel predeterminado del encabezado
}) {
    const Heading = `h${headingLevel}`; // Determina dinámicamente el tipo de encabezado

    return (
        <div className="section max-width">
            <div className="section-container">
                <img src={imageicon1} alt={title1} className="image-section" />
                <Heading className="title-section">{title1}</Heading>
                <p className="text-section">{text1}</p>
            </div>
            <div className="section-container">
                <img src={imageicon2} alt={title2} className="image-section" />
                <Heading className="title-section">{title2}</Heading>
                <p className="text-section">{text2}</p>
            </div>
            <div className="section-container">
                <img src={imageicon3} alt={title3} className="image-section" />
                <Heading className="title-section">{title3}</Heading>
                <p className="text-section">{text3}</p>
            </div>
        </div>
    );
}

export default Section;