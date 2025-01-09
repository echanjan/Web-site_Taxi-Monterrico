import React from 'react';
import '../components/article.css'; // Estilos personalizados
import { FaCheck, FaArrowRight } from "react-icons/fa6";

function Article({ section, icon, title, text, button, img, reverse, onButtonClick }) {
    return (
        <div
            className={`article-container max-width ${reverse ? 'reverse' : ''}`}
        >
            {reverse ? (
                <>
                    <div className='box-article-img'>
                        <img src={img} alt={section} className='article-img' />
                    </div>
                    <div className='article'>
                        <div>
                            <span className='article-section'>{section}</span>
                            <h3 className='article-title'> {icon} {title}</h3>
                        </div>
                        {Array.isArray(text) ? (
                            text.map((item, index) => (
                                <p key={index} className='text-section'>
                                    <FaCheck /> {item}
                                </p>
                            ))
                        ) : (
                            <p className='text-section'>
                                <FaCheck /> {text}
                            </p>
                        )}
                        <p className='article-button' onClick={onButtonClick}>
                            {button} <FaArrowRight className='button-article' />
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className='article'>
                        <div>
                            <span className='article-section'>{section}</span>
                            <h3 className='article-title'> {icon} {title}</h3>
                        </div>
                        {Array.isArray(text) ? (
                            text.map((item, index) => (
                                <p key={index} className='text-section'>
                                    <FaCheck /> {item}
                                </p>
                            ))
                        ) : (
                            <p className='text-section'>
                                <FaCheck /> {text}
                            </p>
                        )}
                        <p className='article-button' onClick={onButtonClick}>
                            {button} <FaArrowRight className='button-article' />
                        </p>
                    </div>
                    <div className='box-article-img'>
                        <img src={img} alt={section} className='article-img' />
                    </div>
                </>
            )}
        </div>
    );
}

// Una única exportación predeterminada al final del archivo
export default Article;
