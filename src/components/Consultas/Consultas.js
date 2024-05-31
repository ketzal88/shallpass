import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
// import { useDynamicNavigation } from '../../hooks/useDynamicNavigation '
import { vector } from '../../assets'
import styles from './Consultas.module.scss'
import useScrollTo from '../../hooks/useScrollTo'

export const Consultas = () => {

  // const navigate = useDynamicNavigation({ subject: `${process.env.REACT_APP_LLC_SUBJECT}` });


  const scrollTo = useScrollTo();

  return (
    <Container className={`${styles.consultas}`}>
      <Row className='justify-content-md-center'>
        <Col
          md={6}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <h3>¿Querés hacer una <span>CONSULTA GRATUITA?</span></h3>
          <Button
            className={`rounded-pill`}
            // onClick={navigate({ newTab: true })}
            onClick={() => scrollTo('llc')}
          >
            Consulta gratis <Image src={vector} width={24} height={24} />
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
