import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Form.scss";

export const Form = ({
  SERVICE_ID = process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID,
  PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY,
  id = "fromHeader",
  submitText = "Ver precios",
}) => {
  const form = useRef();
  const [formResponse, setFormResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Input validation and sanitization
  const sanitizeInput = (value) => {
    if (typeof value !== "string") return "";
    // Remove potentially dangerous characters and trim
    return DOMPurify.sanitize(value.trim(), { ALLOWED_TAGS: [] });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Allow digits, spaces, +, -, and parentheses
    const phoneRegex = /^[\d\s+\-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 8;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Error de configuración. Por favor, contacte al administrador.");
      return;
    }

    // Get and sanitize form values
    const formData = form.current;
    const name = sanitizeInput(formData.user_name?.value || "");
    const phone = sanitizeInput(formData.user_phone?.value || "");
    const email = sanitizeInput(formData.user_email?.value || "");
    const message = sanitizeInput(formData.message?.value || "");

    // Validation
    if (!name || name.length < 2) {
      setError("Por favor, ingrese un nombre válido (mínimo 2 caracteres).");
      return;
    }

    if (!phone || !validatePhone(phone)) {
      setError("Por favor, ingrese un teléfono válido.");
      return;
    }

    if (!email || !validateEmail(email)) {
      setError("Por favor, ingrese un email válido.");
      return;
    }

    if (!message || message.length < 10) {
      setError("Por favor, ingrese un mensaje (mínimo 10 caracteres).");
      return;
    }

    // Limit message length to prevent abuse
    if (message.length > 2000) {
      setError("El mensaje es demasiado largo (máximo 2000 caracteres).");
      return;
    }

    if (loading) return;

    setLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setFormResponse(true);
        setLoading(false);
      },
      (error) => {
        console.error("EmailJS error:", error.text);
        setError(
          "Error al enviar el formulario. Por favor, intente nuevamente."
        );
        setLoading(false);
      }
    );
  };

  const navigate = useNavigate();

  // formResponse ? navigate("/thanks") : console.log("form sin completar");
  useEffect(() => {
    if (formResponse) {
      navigate(`/thanks/${id}`);
    }
  }, [formResponse, navigate, id]);

  return (
    <>
      <form id={id} ref={form} onSubmit={sendEmail} noValidate>
        <Container className="h-100">
          {error && (
            <Row>
              <Col md={12}>
                <div
                  style={{
                    color: "red",
                    marginBottom: "1rem",
                    padding: "0.5rem",
                  }}
                >
                  {error}
                </div>
              </Col>
            </Row>
          )}
          <Row className="h-100 justify-content-between gy-0">
            <Col md={6} className="fomItem ">
              <label htmlFor={`${id}-name`}>Nombre</label>
              <br />
              <input
                id={`${id}-name`}
                type="text"
                name="user_name"
                placeholder="Ingresa tu nombre"
                maxLength={100}
                required
                autoComplete="name"
              />
            </Col>
            <Col md={6} className="fomItem">
              <label htmlFor={`${id}-phone`}>Teléfono</label>
              <br />
              <input
                id={`${id}-phone`}
                type="tel"
                name="user_phone"
                placeholder="Ingresa tu teléfono"
                maxLength={20}
                required
                autoComplete="tel"
              />
            </Col>
            <Col md={12} className="fomItem ">
              <label htmlFor={`${id}-email`}>Email</label>
              <br />
              <input
                id={`${id}-email`}
                type="email"
                name="user_email"
                placeholder="Ingresa tu email"
                maxLength={255}
                required
                autoComplete="email"
              />
            </Col>
            <Col md={12} className="formItem">
              <label htmlFor={`${id}-message`}>Consulta</label>
              <br />
              <textarea
                id={`${id}-message`}
                name="message"
                placeholder="Dejanos un mensaje"
                maxLength={2000}
                required
                rows={4}
              />
            </Col>
            <Col md={6}></Col>
            <Col md={6} id="sendEmail" className="col align-self-end ">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? "Enviando..." : submitText}
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
};
