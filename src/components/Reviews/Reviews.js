import React, { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "./Reviews.module.scss";

const reviews = [
  {
    id: 1,
    name: "Sebastian Senosiain",
    location: "Argentina",
    text: "Trabajar con Shall pass fue un cambio total en lo administrativo y en la organización del negocio. Veníamos bastante desordenados y él nos ayudó a poner estructura, claridad y procesos donde antes había caos. Nos acompañó en todo el proceso para abrir nuestra LLC, fue súper rápido, claro y sin vueltas. Siempre paciente, explicando todo de forma simple y estando encima de cada paso. Hoy tenemos la LLC y la parte administrativa funcionando como corresponde, con orden y tranquilidad. Realmente se siente el acompañamiento y el impacto en el día a día del negocio. Súper recomendable si buscás alguien confiable, ordenado y que te saque un peso de encima.",
    rating: 5,
    source: "Google",
    date: "Hace 2 semanas",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVwtmtx8Z7qkPrgvfozOsMXB8fb2skwZpgvx0Xxow3amkeyZNe0vg=w72-h72-p-rp-mo-br100",
  },
  {
    id: 2,
    name: "Alfonsina Capponi",
    location: "Argentina",
    text: "La verdad que hacer mi SRL con ellos fue un alivio. Yo no entendía nada del proceso y me explicaron todo con una paciencia increíble. Me acompañaron paso a paso, respondieron cada duda y se ocuparon de los trámites sin que yo tenga que estar corriendo detrás de nadie. Hoy tengo mi SRL funcionando y además me ayudan con el mantenimiento mensual, que para mí era un tema. Súper recomendados si querés alguien que esté realmente encima de todo y te haga sentir acompañada",
    rating: 5,
    source: "Google",
    date: "Hace un mes",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWz_T9vPpFfearZz0RM9FJ6QarMgicWYlEsTSegjIaF1uwhT4nK=w72-h72-p-rp-mo-br100",
  },
  {
    id: 3,
    name: "Augusto Spagnolo",
    location: "Argentina",
    text: "Un genio Joel, la verdad. Me guió en cada paso con una paciencia y una claridad tremendas, explicándome todo en un idioma que pude entender sin sentirme perdido. Hoy tengo mi LLC creada y la cuenta bancaria funcionando sin vueltas. Súper agradecido por el acompañamiento y la confianza que me transmitió en todo el proceso.",
    rating: 5,
    source: "Google",
    date: "Hace un mes",
  },
  {
    id: 4,
    name: "Martin Andres",
    location: "Argentina",
    text: "Impresionante experiencia, muy conveniente, no tuve que hacer nada y tengo mi LLC con banco. muy recomendado!",
    rating: 5,
    source: "Google",
    date: "Hace un mes",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWA6d5uvmS9LbBFdfqJF5-qV60nZXPgTlclMzuI9x2B1ukNdk2HUw=w72-h72-p-rp-mo-ba3-br100",
  },
  {
    id: 5,
    name: "Damian Ancic",
    location: "Argentina",
    text: "Excelente atención con soluciones rápidas.",
    rating: 5,
    source: "Google",
    date: "Hace un mes",
  },
  {
    id: 6,
    name: "Gabriel Uccello",
    location: "Argentina",
    text: "Gestionan toda la administración de mi SRL y me abrieron una LLC en 10 dias",
    rating: 5,
    source: "Google",
    date: "Hace un mes",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVhchqmWoD24tXK-R0iiYI0XKVihd0FlG4SDDJ3JR-H3daJ30zjyA=w126-h126-p-rp-mo-ba5-br100",
  },
];

export const Reviews = () => {
  const { isMobile } = useScreenSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const reviewsToShow = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviews.length / reviewsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleReviews = () => {
    const start = currentIndex * reviewsToShow;
    return reviews.slice(start, start + reviewsToShow);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe left - next slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swipe right - previous slide
      prevSlide();
    }

    // Reset
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ));
  };

  return (
    <Container className={styles.reviews}>
      <Row className="mb-2">
        <Col className="text-center">
          {/* <h2 className={styles.title}>Consultora Shall Pass</h2> */}
          <div className={styles.ratingSummary}>
            <span className={styles.ratingNumber}>5</span>
            <span className={styles.ratingText}> estrellas, </span>
            <span className={styles.reviewCount}>6 reseñas, </span>
            <span className={styles.ratingLabel}>"Excelente"</span>
          </div>
          {/* <p className={styles.description}>
            Más de 200 clientes nos califican como Excelente en servicios de
            creación LLC. Descubrí qué opinan sobre Consultora Shall Pass y cómo
            los ayudamos a emprender en EE.UU.
          </p> */}
        </Col>
      </Row>
      <div
        className={styles.cardsWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Row className={styles.cardsRow}>
          {getVisibleReviews().map((review) => (
            <Col
              key={review.id}
              md={isMobile ? 12 : 4}
              className={styles.reviewCard}
              data-aos="fade-up"
            >
              <div className={styles.cardContent}>
                <div className={styles.profileSection}>
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className={styles.avatarImage}
                    />
                  ) : (
                    <div className={styles.avatar}>{review.name.charAt(0)}</div>
                  )}
                  <div className={styles.profileInfo}>
                    <div className={styles.name}>{review.name}</div>
                    <div className={styles.location}>{review.location}</div>
                  </div>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.starsContainer}>
                  {renderStars(review.rating)}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      {totalSlides > 1 && (
        <Row className="justify-content-center mt-4">
          <div className={styles.dotsContainer}>
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${
                  i === currentIndex ? styles.dotActive : ""
                }`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </Row>
      )}
    </Container>
  );
};
