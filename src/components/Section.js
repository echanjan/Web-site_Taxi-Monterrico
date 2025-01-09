import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Importa el CSS de AOS
import '../components/section.css';

function Section({ imageicon1, title1, text1, imageicon2, title2, text2, imageicon3, title3, text3, }) {
    return (
        <div className='section max-width'>
            <div className='section-container'>
                <img src={imageicon1} alt={title1} className='image-section'></img>
                <h3 className='title-section'>{title1}</h3>
                <p className='text-section'>{text1}</p>
            </div>
            <div className='section-container'>
                <img src={imageicon2} alt={title2} className='image-section'></img>
                <h3 className='title-section'>{title2}</h3>
                <p className='text-section'>{text2}</p>
            </div>
            <div className='section-container'>
                <img src={imageicon3} alt={title3} className='image-section'></img>
                <h3 className='title-section'>{title3}</h3>
                <p className='text-section'>{text3}</p>
            </div>
        </div>
    );
}

export default Section;
