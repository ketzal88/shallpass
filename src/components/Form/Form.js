import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Form.scss'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export const Form = ({ SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, id }) => {

    // console.log(`Srvice ID:${SERVICE_ID}, Templete ID: ${TEMPLATE_ID}, Public Key: ${PUBLIC_KEY}`)

    

    const form = useRef();

    const [formResponse, setFormResponse] = useState(false)
   


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
                setFormResponse(true)
            }, (error) => {
                console.log(error.text);
            });
    };

   
       
    const navigate = useNavigate();
    
    formResponse ?
        (
            // console.log('gracias')
            navigate('/thanks')
        ) : console.log('form sin completar')

    return (
        <>
            <form id={id} ref={form} onSubmit={sendEmail}>
                <Container className='h-100'>
                    <Row className='h-100 justify-content-between gy-0' >
                            <Col md={6} className='fomItem '>
                                <label>Nombre</label><br />
                                <input type="text" name="user_name" placeholder='Ingresa tu nombre' />
                            </Col>
                            <Col md={6} className='fomItem'>
                                <label>Teléfono</label><br />
                                <input type="number" name="user_phone" placeholder='Ingresa tu teléfono' required />
                            </Col>
                        <Col md={12} className='fomItem '>
                            <label>Email</label><br />
                            <input type="email" name="user_email" placeholder='Ingresa tu email' required />
                        </Col>
                        <Col md={12} className='formItem'>
                            <label>Consulta</label><br />
                            <textarea name="message" placeholder='Dejanos un mensaje' required />
                        </Col>
                        <Col md={6}></Col>
                        <Col md={6} id='sendEmail' className='col align-self-end '>
                            <Button variant="primary">
                                <input type="submit" value="ENVIAR CONSULTA" />
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    )
}
