import React from 'react'
import './policy.css'

function Policy() {
    return (
        <div className='box-policy'>
            <h1>Eliminar tu cuenta</h1>
            <p>
                Si deseas eliminar tu cuenta de nuestra aplicación, puedes solicitarlo de la siguiente manera:
            </p>
            <p>
                <strong>📞 Llama o envía un mensaje al número:</strong> <a href="tel:+1234567890">+51 989 063 650</a>
            </p>
            <h2>
                Eliminación automática por inactividad
            </h2>
            <p>
                Si no registras actividad en tu cuenta durante un período de <strong>90 días consecutivos</strong>, tu cuenta será eliminada automáticamente de nuestros servidores, junto con todos tus datos asociados.
            </p>
            <p>
                Para mantener tu cuenta activa, simplemente inicia sesión o utiliza alguna funcionalidad de la app dentro de ese período.
            </p>
            <p>
                Si tienes dudas, no dudes en contactarnos al número indicado.
            </p>
        </div>
    )
}

export default Policy