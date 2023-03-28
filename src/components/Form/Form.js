import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Form.scss'
import { Button, Col, Container, Row } from 'react-bootstrap';

export const Form = ({ SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, id }) => {

    // console.log(`Srvice ID:${SERVICE_ID}, Templete ID: ${TEMPLATE_ID}, Public Key: ${PUBLIC_KEY}`)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form id={id} ref={form} onSubmit={sendEmail}>
            <Container className='h-100'>
                <Row className='h-100 justify-content-between gy-0' >
                        <Col md={6} className='fomItem '>
                            <label>Nombre</label><br />
                            <input type="text" name="user_name" placeholder='Ingresa tu nombre' />
                        </Col>
                        <Col md={6} className='fomItem'>
                            <label>Teléfono</label><br />
                            <input type="tel" name="user_name" placeholder='Ingresa tu teléfono' />
                        </Col>
                    <Col md={12} className='fomItem '>
                        <label>Email</label><br />
                        <input type="email" name="user_email" placeholder='Ingresa tu email' />
                    </Col>
                    <Col md={12} className='formItem'>
                        <label>Consulta</label><br />
                        <textarea name="message" placeholder='Dejanos un mensaje' />
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
    )
}
