import React, { useState, useEffect } from 'react';
import '../pages/suggestions.css';

function Suggestions() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // Se ejecuta solo al montar el componente

    const [isModalVisible, setIsModalVisible] = useState(true);
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const closeModal = () => {
        setIsModalVisible(false);
    };

    // Sube una imagen al servidor y devuelve su URL
    const uploadImage = async (file) => {
        const MAX_SIZE = 10 * 1024 * 1024;

        if (file.size > MAX_SIZE) {
            alert("El archivo es demasiado grande. El tamaño máximo permitido es 10 MB.");
            throw new Error("El archivo es demasiado grande.");
        }

        const formData = new FormData();
        formData.append("bucket", "webmonterricoapp");
        formData.append("file", file);

        console.log("Subiendo imagen...");

        const response = await fetch("https://cloud.3w.pe/media", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        if (result.url) {
            console.log("Imagen subida con éxito:", result.url);
            return result.url;
        } else {
            throw new Error("Error al subir la imagen");
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const imageUrl = await uploadImage(file);
            setUploadedImageUrl(imageUrl);
            alert('Imagen subida exitosamente.');
        } catch (error) {
            console.error(error);
            alert('Error al subir la imagen.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Captura los datos del formulario
        const data = {
            fecha: document.getElementById('rFecha').value,
            idreserva: document.getElementById('rNservicio').value,
            csolicitud: document.getElementById('rCsolicitud').value,
            nombres: document.getElementById('rNombres').value,
            apellidos: document.getElementById('rApellidos').value,
            tipodocumento: document.getElementById('rTDocumento').value,
            ndocumento: document.getElementById('rNDocumento').value,
            telefono: document.getElementById('rNTelefono').value,
            email: document.getElementById('rCorreo').value,
            incidencia: document.getElementById('rDetalle').value,
            pedido: document.getElementById('rSolicitud').value,
            fincidencia: uploadedImageUrl, // URL de la imagen subida
        };

        try {
            const response = await fetch('https://apibeta.monterrico.app/api/Incidenciau/Registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Enviar como JSON
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                alert('Formulario enviado exitosamente.');
                console.log('Respuesta del servidor:', result);
            } else {
                const errorData = await response.json();
                console.error('Error al enviar:', errorData);
                alert('Error al enviar el formulario.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Hubo un error en la conexión.');
        }
    };
    return (
        <div className='box-suggestions'>
            {isModalVisible && (
                <div className='overlay-modal'>
                    <div className='modal-content'>
                        <h1>Reclamos y sugerencias</h1>
                        <p>Antes que nada, queremos expresarle nuestras más sinceras disculpas por cualquier inconveniente que haya experimentado con nuestro servicio. En Taxi Monterrico, nos esforzamos diariamente por ofrecer experiencias de alta calidad a todos nuestros clientes, y lamentamos profundamente no haber cumplido con sus expectativas en esta ocasión.
                            Entendemos la importancia de su retroalimentación y estamos comprometidos en escuchar de manera atenta para entender y resolver su situación de la mejor manera posible. Como parte de nuestro compromiso con la mejora continua y la satisfacción del cliente, ponemos a su disposición nuestro Libro de Reclamaciones.
                            Le invitamos a registrar su reclamación, asegurándole que será tratada con la seriedad y urgencia que merece. Nuestro equipo se encargará de analizar detalladamente su caso y le ofreceremos una respuesta oportuna y adecuada a su situación.
                            Agradecemos de antemano el tiempo que se tomará para expresar su preocupación y nos permita la oportunidad de mejorar. Estamos a su disposición para cualquier consulta o información adicional que requiera.</p>
                        <button className='modal-button' onClick={closeModal}>Continuar</button>
                    </div>
                </div>
            )}
            <h1>Datos del incidente</h1>
            <form className='form-suggestions' onSubmit={handleSubmit}>
                <div className='content-suggestions'>
                    <input id='rFecha' className='input-suggestions' type='date'></input>
                    <input id='rNservicio' className='input-suggestions' type='number' placeholder='Número de servicio'></input>
                    <select id='rCsolicitud' className='input-suggestions' title='canal de solicitud' required>
                        <option>Call center</option>
                        <option>Whatsapp</option>
                        <option>Android</option>
                        <option>iOs</option>
                        <option>Intranet</option>
                    </select>
                </div>
                <div className='content-suggestions'>
                    <input id='rNombres' className='input-suggestions' type='text' placeholder='Nombres'></input>
                    <input id='rApellidos' className='input-suggestions' type='text' placeholder='Apellidos'></input>
                </div>
                <div className='content-suggestions'>
                    <select id='rTDocumento' className='input-suggestions' title='tipo de documento' required>
                        <option>DNI</option>
                        <option>Carnet de extranjería</option>
                        <option>Pasaporte</option>
                    </select>
                    <input id='rNDocumento' className='input-suggestions' type='number' placeholder='Número de documento'></input>
                </div>
                <div className='content-suggestions'>
                    <input id='rNTelefono' className='input-suggestions' type='number' placeholder='Número de teléfono'></input>
                    <input id='rCorreo' className='input-suggestions' type='email' placeholder='Correo'></input>
                </div>
                <div className='content-suggestions2'>
                    <textarea id='rDetalle' className='textarea-suggestions' placeholder='Escribe los detalles de lo sucedido'></textarea>
                    <textarea id='rSolicitud' className='textarea-suggestions' placeholder='Escribe tu solicitud'></textarea>
                    <input id="rFile" className="input-suggestions" type="file" onChange={handleFileChange}></input>
                    <button id='rSubmit' className='button-suggestions' type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Suggestions