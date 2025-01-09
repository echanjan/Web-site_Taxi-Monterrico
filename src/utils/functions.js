import { useNavigate } from 'react-router-dom';

// ABRE UNA PESTAÑA NUEVA
export const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

// DIRIGE HACIA OTRA SECCIÓN CON DELAY
export const scrollToSection = (id) => {
    setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 300); // Delay de 300ms
};

// NAVEGA HACIA UNA SECCIÓN EN OTRA PÁGINA CON DELAY
export const useNavigation = () => {
    const navigate = useNavigate();

    const goToSection = (path, sectionId) => {
        navigate(path); // Navega primero al path
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300); // Delay de 300ms para dar tiempo a la navegación y renderizado
    };

    return { goToSection };
};
