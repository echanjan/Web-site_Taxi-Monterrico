import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/suggestions.css';
import Swal from 'sweetalert2';
import CircularProgress from '@mui/material/CircularProgress';

function Suggestions() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []); // Se ejecuta solo al montar el componente

    const [isLoading, setIsLoading] = useState(false); // Estado para controlar el spinner
    const [isModalVisible, setIsModalVisible] = useState(true);

    const [tipodocumento, settipodocumento] = useState('DNI')
    const [ndocumento, setndocumento] = useState('')
    const [nombres, setnombres] = useState('')
    const [apellidos, setapellidos] = useState('')
    const [direccion, setdireccion] = useState('')
    const [distrito, setdistrito] = useState('')
    const [telefono, settelefono] = useState('')
    const [email, setemail] = useState('')
    const [padremadre, setpadremadre] = useState('')
    const [fechorincidente, setfechorincidente] = useState('')
    const [mediocomunicacion, setmediocomunicacion] = useState('Call center')
    const [idreserva, setidreserva] = useState('')
    const [contratado, setcontratado] = useState('Producto')
    const [monto, setmonto] = useState('')
    const [descripcion, setdescripcion] = useState('')
    // const [fecharespuesta, setfecharespuesta] = useState('')
    const [responseDate, setResponseDate] = useState('');
    const [tiporeclamo, settiporeclamo] = useState('Reclamo')
    const [detallereclamo, setdetallereclamo] = useState('')
    const [pedidoreclamo, setpedidoreclamo] = useState('')
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');
    // const [fotoreclamo, setfotoreclamo] = useState('')


    useEffect(() => {
        // Calcula la fecha sumando 15 días hábiles (lunes a viernes)
        const calculateBusinessDays = (startDate, days) => {
            const resultDate = new Date(startDate);
            let addedDays = 0;

            while (addedDays < days) {
                resultDate.setDate(resultDate.getDate() + 1);

                // Si no es sábado (6) ni domingo (0), incrementamos el contador de días hábiles
                if (resultDate.getDay() !== 0 && resultDate.getDay() !== 6) {
                    addedDays++;
                }
            }

            return resultDate;
        };

        const today = new Date();
        const fifteenBusinessDaysFromNow = calculateBusinessDays(today, 15);
        const formattedDate = fifteenBusinessDaysFromNow.toISOString().split('T')[0]; // Formato yyyy-mm-dd

        setResponseDate(formattedDate);
    }, []);

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
            console.log('Imagen subida exitosamente.');
        } catch (error) {
            console.error(error);
            console.log('Error al subir la imagen.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Captura los datos del formulario
        const data = {
            // fecha: document.getElementById('rFecha').value,
            // idreserva: document.getElementById('rNservicio').value,
            // csolicitud: document.getElementById('rCsolicitud').value,
            // nombres: document.getElementById('rNombres').value,
            // apellidos: document.getElementById('rApellidos').value,
            // tipodocumento: document.getElementById('rTDocumento').value,
            // ndocumento: document.getElementById('rNDocumento').value,
            // telefono: document.getElementById('rNTelefono').value,
            // email: document.getElementById('rCorreo').value,
            // incidencia: document.getElementById('rDetalle').value,
            // pedido: document.getElementById('rSolicitud').value,
            // fincidencia: uploadedImageUrl, // URL de la imagen subida
            tipodocumento: tipodocumento,
            ndocumento: ndocumento,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            distrito: distrito,
            telefono: telefono,
            email: email,
            padremadre: padremadre,
            fechorincidente: fechorincidente,
            mediocomunicacion: mediocomunicacion,
            idreserva: idreserva,
            contratado: contratado,
            monto: monto,
            descripcion: descripcion,
            fecharespuesta: responseDate,
            tiporeclamo: tiporeclamo,
            detallereclamo: detallereclamo,
            pedidoreclamo: pedidoreclamo,
            fotoreclamo: uploadedImageUrl
        };

        try {
            const response = await axios.post(
                'https://apibeta.monterrico.app/api/Incidenciau/Registro',
                data, // El cuerpo del POST
                {
                    headers: {
                        'Content-Type': 'application/json', // Enviar como JSON
                    },
                }
            );

            // Verificar si la respuesta fue exitosa
            if (response.data.estatus === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "¡Enviado!",
                    text: "¡Gracias por enviar tu sugerencias, muy pronto nos comunicaremos contigo!",
                    showConfirmButton: false,
                    timer: 3000
                })

            } else if (response.data.estatus === 400) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "¡Error!",
                    text: response.data.message,
                    showConfirmButton: false,
                    timer: 3000
                })

            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "¡Error!",
                    text: response.data.message,
                    showConfirmButton: false,
                    timer: 3000
                })

            }
        } catch (error) {
            // Manejo de errores en la solicitud
            if (error.response) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "¡Error!",
                    text: error.response.data.message,
                    showConfirmButton: false,
                    timer: 3000
                })

            } else if (error.request) {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "¡Error!",
                    text: "No se pudo conectar con el servidor. Verifica tu conexión.",
                    showConfirmButton: false,
                    timer: 3000
                })

            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "¡Error!",
                    text: "Ocurrió un error al configurar la solicitud.",
                    showConfirmButton: false,
                    timer: 3000
                })

            }
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
            <h1>Libro de reclamaciones</h1>
            <form className='form-suggestions' onSubmit={handleSubmit}>
                <h3>Datos de la persona que presenta el reclamo</h3>
                <div className='content-suggestions'>
                    <div className='content-suggestions'>
                        <div className='box-input-suggestions'>
                            <label>Tipo de documento</label>
                            <select className='input-suggestions' title='tipo de documento' value={tipodocumento} onChange={(e) => settipodocumento(e.target.value)} required>
                                <option value='DNI'>DNI</option>
                                <option value='Carnet de extranjeria'>Carnet de extranjería</option>
                                <option value='Pasaporte'>Pasaporte</option>
                            </select>
                        </div>
                        <div className='box-input-suggestions'>
                            <label>Número de documento</label>
                            <input className='input-suggestions' type='number' placeholder='12345678' value={ndocumento} onChange={(e) => setndocumento(e.target.value)} ></input>
                        </div>
                    </div>
                </div>
                <div className='content-suggestions'>
                    <div className='box-input-suggestions'>
                        <label>Nombre</label>
                        <input className='input-suggestions' type='text' placeholder='Luis' value={nombres} onChange={(e) => setnombres(e.target.value)}></input>
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Apellido</label>
                        <input className='input-suggestions' type='text' placeholder='Quiñones' value={apellidos} onChange={(e) => setapellidos(e.target.value)}></input>
                    </div>
                </div>
                <div className='content-suggestions'>
                    <div className='box-input-suggestions'>
                        <label>Dirección</label>
                        <input className='input-suggestions' type='text' placeholder='Av Prolongación Iquitos 2291' value={direccion} onChange={(e) => setdireccion(e.target.value)}></input>
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Distrito</label>
                        <input className='input-suggestions' type='text' placeholder='Lince' value={distrito} onChange={(e) => setdistrito(e.target.value)}></input>
                    </div>
                </div>
                <div className='content-suggestions'>
                    <div className='box-input-suggestions'>
                        <label>Teléfono</label>
                        <input className='input-suggestions' type='number' placeholder='987654321' value={telefono} onChange={(e) => settelefono(e.target.value)}></input>
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Correo</label>
                        <input className='input-suggestions' type='email' placeholder='ejemplo@gmail.com' value={email} onChange={(e) => setemail(e.target.value)}></input>
                    </div>
                </div>
                <div className='box-input-suggestions'>
                    <label>Nombre de padre o madre si es menor de edad</label>
                    <input className='input-suggestions' type='text' placeholder='José' value={padremadre} onChange={(e) => setpadremadre(e.target.value)}></input>
                </div>
                <h3>Información general</h3>
                <div className="input-suggestions-date">
                    <label className='label-date'>Fecha del incidente</label>
                    <input className="input-date" type="date" placeholder="dd/mm/aaaa" value={fechorincidente} onChange={(e) => setfechorincidente(e.target.value)} />
                </div>
                <div className='content-suggestions'>
                    <div className='box-input-suggestions'>
                        <label>Medio de comunicación</label>
                        <select className='input-suggestions' title='canal de solicitud' required value={mediocomunicacion} onChange={(e) => setmediocomunicacion(e.target.value)}>
                            <option value="Call center">Call center</option>
                            <option value="Whatsapp">Whatsapp</option>
                            <option value="Android">Android</option>
                            <option value="iOs">iOs</option>
                            <option value="Intranet">Intranet</option>
                        </select>
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Número de servicio</label>
                        <input className='input-suggestions' type='number' placeholder='654321' value={idreserva} onChange={(e) => setidreserva(e.target.value)}></input>
                    </div>
                </div>
                <div className='content-suggestions'>
                    <div className='box-input-suggestions'>
                        <label>Identificación del bien contratado</label>
                        <select className='input-suggestions' title='canal de solicitud' required value={contratado} onChange={(e) => setcontratado(e.target.value)}>
                            <option value='Producto'>Producto</option>
                            <option value='Servicio'>Servicio</option>
                        </select>
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Monto reclamado</label>
                        <input className='input-suggestions' type='number' placeholder='S/999' value={monto} onChange={(e) => setmonto(e.target.value)}></input>
                    </div>
                </div>
                <div className='box-input-suggestions'>
                    <label>Descripción</label>
                    <textarea className='textarea-suggestions' placeholder='Desripción aquí' value={descripcion} onChange={(e) => setdescripcion(e.target.value)}></textarea>
                </div>
                <h3>Detalle de reclamo</h3>
                <div className='content-suggestions'>
                    <div className='box-input-suggestions'>
                        <label>Fecha de comunicación de la respuesta</label>
                        <input
                            className='input-suggestions'
                            type='date'
                            disabled
                            value={responseDate} onChange={(e) => setResponseDate(e.target.value)}
                        />
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Tipo</label>
                        <select className='input-suggestions' title='canal de solicitud' required value={tiporeclamo} onChange={(e) => settiporeclamo(e.target.value)} >
                            <option value='Reclamo'>Reclamo</option>
                            <option value='Queja'>Queja</option>
                        </select>
                    </div>
                </div>
                <p className='description-type'>
                    <strong>Reclamo: </strong>Disconformidad relacionada a los productos o servicios. <br />
                    <strong>Queja: </strong>Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público.
                </p>
                <div className='content-suggestions2'>
                    <div className='box-input-suggestions'>
                        <label>Detalle del reclamo</label>
                        <textarea className='textarea-suggestions' placeholder='Detalle de su reclamo o sugerencia aquí' value={detallereclamo} onChange={(e) => setdetallereclamo(e.target.value)} ></textarea>
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Pedido</label>
                        <textarea className='textarea-suggestions' placeholder='Su pedido aquí' value={pedidoreclamo} onChange={(e) => setpedidoreclamo(e.target.value)}></textarea>
                    </div>
                    <div className='box-input-suggestions'>
                        <label>Adjuntar archivos (opcional)</label>
                        <input id="rFile" className="input-suggestions" type="file" onChange={handleFileChange}></input>
                    </div>
                    <button id='rSubmit' className='button-suggestions' type='submit'>
                        {isLoading ? <CircularProgress size={20} sx={{ color: '#ffffff', marginRight: '10px' }} /> : 'Enviar'}
                    </button>
                    <p className='description-type'>
                        *La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. <br />
                        * El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles, el cual es improrrogable
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Suggestions