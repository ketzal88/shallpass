import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { porque, porqueAlternate, porqueCompleto } from '../../assets'
import { Gota } from '../../assets/Gota'
import { ImageSelector } from '../ImageSelector/ImageSelector'

import './PorqueElegirnos.scss'


export const PorqueElegirnos = () => {
    return (
        <Row id='porqueElegirnos'>
            <Container>
                <Row>
                    <Col md={6}>
                        <Row>
                            {/* <>
                            <Col xs={6}
                                id='imagem'
                            >
                                <ImageSelector imgWebP={porque} noWebpImg={porqueAlternate} imageAlt={'Joven sonriente fontdo amarillo'} />
                            </Col>
                            <Col xs={6}
                                // style={{backgroundColor:'aqua'}}
                                className='d-flex flex-column '
                            >
                                <Col 
                                    id='gotaNaraja'
                                    style={{ position: 'relative' }}
                                    className='d-flex' >
                                    <Gota setId={'gota1'} />
                                    <Col className='gotaData'>
                                        <h4>36</h4>
                                        <p>Proyectos</p>
                                    </Col>
                                </Col>
                                <Col
                                    id='gotaBlanca'
                                    style={{ position: 'relative' }}
                                    className='d-flex flex-column justify-content-end '
                                >
                                    <Gota setId={'gota2'} bgColor={'white'} />
                                    <Col className='gotaData'>
                                        <h4>43</h4>
                                        <p>Clientes satisfechos</p>
                                    </Col>
                                </Col>
                            </Col>
                            </> */}
                        </Row>
                        <Image src={porqueCompleto} fluid/>
                    </Col>
                    <Col md={6}>
                        <h2>Por qué<br /> elegirnos?</h2>
                        <p>Buscamos asistirte en tus ideas, proyectos y negocios. Nos ocupamos de las cuestiones que te estresan y te generan incertidumbre para que
                            <span> vos te enfoques en potenciar tu negocio.</span></p>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}
