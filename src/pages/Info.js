import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/info.css';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';

function InfoCorporate() {
    const [data, setData] = useState([]);
    const [proceso, setProceso] = useState(null);
    const [loading, setLoading] = useState(true);
    // timeLeft se actualizará con el valor recibido en la API.
    const [timeLeft, setTimeLeft] = useState(10);

    // Extraemos el parámetro "key" desde la URL.
    const params = new URLSearchParams(window.location.search);
    const apiKey = params.get('key');

    const handleInfoCorporate = async () => {
        try {
            const response = await axios.get(
                `https://api.monterrico.app/api/bot/GProceso?key=${apiKey}`
            );
            if (response.data.estatus === 200) {
                setData(response.data.AInfo);
                setProceso(response.data.OProceso);
                // Se asigna el tiempo recibido (que puede ser negativo)
                const nuevoTiempo = response.data.OProceso.tiempo;
                setTimeLeft(nuevoTiempo);
                // Si el tiempo es menor o igual a -1, se borra el contenido de AInfo
                if (nuevoTiempo <= -1) {
                    setData([]);
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al cargar la información.'
                });
            }
        } catch (error) {
            console.error('Error fetching corporate info:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al conectarse con el servidor.'
            });
        } finally {
            setLoading(false);
        }
    };

    // Consulta la API al montar el componente y cada 1 minuto (60000 ms)
    useEffect(() => {
        handleInfoCorporate();
        const apiInterval = setInterval(() => {
            handleInfoCorporate();
        }, 60000);
        return () => clearInterval(apiInterval);
    }, [apiKey]);

    // Función para copiar texto al portapapeles
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Copiado',
                    text: 'Texto copiado al portapapeles',
                    timer: 1500,
                    showConfirmButton: false
                });
            })
            .catch((err) => {
                console.error('Error copying text: ', err);
            });
    };

    if (loading) {
        return (
            <div className='box-info'>
                <CircularProgress />
            </div>
        );
    }

    // Calcula el porcentaje de la barra de progreso.
    // Suponemos un rango de 10 seg como máximo; si timeLeft es <= 0 se muestra al 100%.
    const progressPercentage = timeLeft > 0 ? ((10 - timeLeft) / 10) * 100 : 100;

    return (
        <div className='box-info'>
            <div
                className='box-info-title'
                style={{
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    background: '#f9f9f9'
                }}
            >
                <h2 style={{ marginBottom: '15px', color: '#052512' }}>
                    Información Corporativa
                </h2>
                {proceso && (
                    <div className='proceso-info' style={{ marginBottom: '15px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>
                            Proceso: {proceso.proceso}
                        </p>
                        <p style={{ margin: '0 0 10px 0' }}>
                            Tiempo restante: {timeLeft} min
                        </p>
                        <div
                            className='timer-bar'
                            style={{
                                width: '100%',
                                height: '10px',
                                background: '#e0e0e0',
                                borderRadius: '5px'
                            }}
                        >
                            <div
                                style={{
                                    width: `${progressPercentage}%`,
                                    height: '100%',
                                    background: '#3b82f6',
                                    borderRadius: '5px',
                                    transition: 'width 1s linear'
                                }}
                            ></div>
                        </div>
                    </div>
                )}
                <div className='info-items'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='info-item'
                            style={{
                                padding: '10px',
                                margin: '5px 0',
                                background: '#fff',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                            onClick={() => copyToClipboard(item.info)}
                        >
                            <h3 style={{ margin: 0 }}>{item.info}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InfoCorporate;
