import React, { useState } from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import styles from "./FAQ.module.scss";
import { vector } from "../../assets";
import useScrollTo from "../../hooks/useScrollTo";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const scrollTo = useScrollTo();

  const faqs = [
    {
      question: "¿Qué respaldo ofrecemos en el proceso?",
      answer:
        "Trabajamos con procesos formales y documentación oficial desde el inicio. Te acompañamos durante todo el proceso y verificamos que la LLC quede correctamente constituida y operativa, según tu perfil y actividad. Asimismo, no debes abonar el servicio hasta que no esté constituida tu LLC y obtengas el EIN por parte del IRS.",
    },
    {
      question: "¿En cuánto tiempo se constituye una LLC?",
      answer:
        "El plazo habitual es de 7 a 15 días hábiles, dependiendo del estado elegido y de los tiempos de respuesta del IRS para la asignación del EIN. Te mantenemos informado en cada etapa.",
    },
    {
      question:
        "¿Cómo puedo enviar y recibir dinero desde Estados Unidos de forma legal?",
      answer:
        "Una vez constituida la LLC, podés operar con cuentas bancarias empresariales y plataformas de pago internacionales, lo que te permite transferir y recibir fondos de manera legal y ordenada.",
    },
    {
      question: "¿Qué necesito para abrir una LLC en Estados Unidos?",
      answer: (
        <>
          El proceso es simple. Solo necesitás:
          <ul>
            <li>Documento de identidad vigente</li>
            <li>Datos básicos de contacto</li>
          </ul>
          No es necesario residir en EE.UU. ni contar con visa, SSN o ITIN para la apertura.
        </>
      ),
    },
    {
      question: "¿Cuál es el costo para abrir una LLC?",
      answer:
        "El costo depende del plan y los servicios incluidos (apertura, cuentas bancarias, plataformas de cobro, mantenimiento, etc.). En la landing podés ver los planes disponibles y qué incluye cada uno.",
    },
    {
      question: "¿Qué impuestos tiene una LLC en Estados Unidos?",
      answer:
        "Depende del tipo de actividad y de dónde se generan los ingresos. En muchos casos, cuando la LLC no genera ingresos efectivamente conectados a EE.UU., no se pagan impuestos federales, aunque sí existen obligaciones informativas anuales.",
    },
    {
      question: "¿Por qué elegirnos para abrir tu LLC?",
      answer:
        "Porque no solo constituimos la sociedad: Te ayudamos a que tu LLC quede realmente operativa, con acompañamiento claro, procesos simples y soporte continuo, evitando errores comunes que luego generan problemas o costos innecesarios.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className={styles.faq}>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h1 className={styles.title}>
            Preguntas <span>Frecuentes</span>
          </h1>

          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={`${styles.accordionHeader} ${
                    openIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span
                    className={`${styles.chevron} ${
                      openIndex === index ? styles.rotated : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className={styles.accordionContent}>
                    <div className={styles.answer}>{faq.answer}</div>
                    <div className={styles.ctaContainer}>
                      <Button
                        className={styles.ctaButton}
                        onClick={() => scrollTo("llc")}
                      >
                        ¡Haz clic aquí y contáctanos!
                        <Image src={vector} width={20} height={20} />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

