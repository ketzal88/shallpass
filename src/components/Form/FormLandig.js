import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { vector } from "../../assets";
import styles from "./FormLanding.module.scss";

export const FormLanding = ({
  SERVICE_ID = process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID,
  PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY,
  id = "fromHeader",
  submitText,
}) => {
  const form = useRef();
  const [formResponse, setFormResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Input sanitization
  const sanitizeInput = (value) => {
    if (typeof value !== "string") return "";
    return DOMPurify.sanitize(value.trim(), { ALLOWED_TAGS: [] });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormDataLayer = (email) => {
    // Sanitize data before sending to analytics
    const sanitizedEmail = email ? sanitizeInput(email) : "";
    window.dataLayer.push({
      event: "FormData",
      email: sanitizedEmail,
      sent: true,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Error de configuración. Por favor, contacte al administrador.");
      return;
    }

    const email = sanitizeInput(form.current.user_email?.value || "");

    if (!email || !validateEmail(email)) {
      setError("Por favor, ingrese un email válido.");
      return;
    }

    if (loading) return;

    setLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        handleFormDataLayer(email);
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

  useEffect(() => {
    if (formResponse) {
      navigate(`/thanks/${id}`);
    }
  }, [formResponse, navigate, id]);

  return (
    <>
      <form
        id={id}
        ref={form}
        onSubmit={sendEmail}
        className={`${styles.formComponet}`}
        noValidate
      >
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
        <Row className="">
          <Col className={`${styles.itemForm} ${styles.emailBox}`}>
            <label htmlFor={`${id}-email`}>Email</label>
            <input
              id={`${id}-email`}
              type="email"
              name="user_email"
              placeholder="Ingresa tu email"
              maxLength={255}
              required
              autoComplete="email"
              style={{ borderRadius: "24px !important" }}
            />
          </Col>
          <Col
            lg={4}
            xs={12}
            id="sendEmail"
            className={`${styles.itemForm}`}
            style={{ paddingRight: "12px", paddingLeft: "12px" }}
          >
            <Button
              variant="primary"
              className="rounded-pill"
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : submitText} <Image src={vector} />
            </Button>
          </Col>
        </Row>
        <input type="hidden" name="form_id" value={id} />
      </form>
    </>
  );
};
