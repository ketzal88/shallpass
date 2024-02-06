import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import DOMPurify from 'dompurify'

import { servicios } from '../../data/data'

import styles from './Servicios.module.scss'

export const Servicios = () => {

    const sanitizer = DOMPurify.sanitize;

    const svgStringDark = ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="white"/>
                            <path d="M9.89571 17L5 12.2599L6.22393 11.0748L9.89571 14.6299L17.7761 7L19 8.18503L9.89571 17Z" fill="black"/>
                            </svg>`
    
    const svgStringLight = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#F5F0E1"/>
                            <path d="M9.89571 17L5 12.2599L6.22393 11.0748L9.89571 14.6299L17.7761 7L19 8.18503L9.89571 17Z" fill="#111111"/>
                            </svg>`

    const svgStringAcent = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#FFBF01"/>
                            <path d="M9.89571 17L5 12.2599L6.22393 11.0748L9.89571 14.6299L17.7761 7L19 8.18503L9.89571 17Z" fill="#111111"/>
                            </svg>`

    const svgBase64Dark     = btoa(svgStringDark);
    const svgBase64Light    = btoa(svgStringLight);
    const svgBase64Acent    = btoa(svgStringAcent);


  return (
    <Row className={`${styles.servicios}`}>
        <Container fluid>
            <Container className={`${styles.main}`} >
                <h2>Nuestros servicios</h2>
                <Row md={4} className={`${styles.serviciosRow} g-4`}>
                    {
                        servicios.map((data, id)=>(
                            <Col key={id}>
                                <Col className={`${data.dark ? styles.dark : styles.light} ${styles.servicioContainer} h-100`}>
                                    {
                                        data.highlight !== '' ?(
                                            <Col className={`${styles.highlight}`} >
                                                <small>{data.highlight}</small>
                                            </Col>
                                        ):''
                                    }
                                    <Col>
                                        <h3 dangerouslySetInnerHTML={{ __html: sanitizer(data.title) }} />
                                        <Row className='align-items-center'>
                                            <Col style={{padding: '0 6px 0 0'}} >
                                                <h2 className='text-end' ><span>U$D </span></h2>
                                            </Col>
                                            <Col style={{ padding: '0 0 0 6px' }}>
                                                <h2 className='text-start' >{data.price}</h2>
                                            </Col>
                                        </Row>
                                        <p className={`${styles.note}`} dangerouslySetInnerHTML={{ __html: sanitizer(data.note) }} />
                                        <Container>
                                            <Row>
                                                <Button className={`rounded-pill`}>
                                                    {data.ctaText}
                                                </Button>
                                            </Row>
                                        </Container>
                                    </Col>
                                    <ul>
                                        {
                                            data.bulet.map((li, id)=>(
                                                <Col key={id} >
                                                    <li 
                                                        style={{ 
                                                            backgroundImage: `url('data:image/svg+xml;base64,${
                                                                li.acent === true 
                                                                ? (svgBase64Acent) 
                                                                : (
                                                                    data.dark 
                                                                    ? svgBase64Dark 
                                                                    : svgBase64Light
                                                                )
                                                            }`, 
                                                        }}
                                                    >
                                                        <>
                                                            {li.bulletText}
                                                        </>
                                                    </li>
                                                    {(id + 1) !== (data.bulet.length) && <hr /> }
                                                </Col>
                                            ))
                                        }
                                    </ul>
                                    <Col className={`${styles.footer}`}>
                                        {
                                            data.footer.map((text, id)=>(
                                                <p key={id}>{text}</p>
                                            ))
                                        }
                                    </Col>
                                </Col>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </Container>
    </Row>
  )
}
