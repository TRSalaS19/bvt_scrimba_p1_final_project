import React from 'react';


export default function Buttons() {
    return (
        <div className='btns-container'>
            <a href="mailto:someaddress@gmail.com" className='btn btn_email'><i class="fa-solid fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/gustavo-ruiz-salas-407891102/" className='btn btn_linkedin'><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
    )
}