import React from 'react';
import CarouselFadeExample from '../sub-components/CarouselFadeExample';
import HorizontalCarousel from '../sub-components/HorizontalCarousel';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import FooterSections from './FooterSections';

function Home() {
  const frontImages = [
    { src: "/img1.png", alt: "Brand 1" },
    { src: "/img2_front.jpeg", alt: "Brand 2" },
    { src: "/img3_front.jpeg", alt: "Brand 3" },
    // Añade más imágenes según sea necesario
  ];

  const brandImages = [
    { src: "/Mitsubishi.PNG", alt: "Brand 1" },
    { src: "/honda.PNG", alt: "Brand 2" },
    { src: "/mazda.png", alt: "Brand 3" },
    { src: "/jac.png", alt: "Brand 4" },
    { src: "/cherry.png", alt: "Brand 5" },
    { src: "/chevrolet.png", alt: "Brand 6" },
    { src: "/BMW.png", alt: "Brand 7" },
    // Añade más imágenes si es necesario
  ];

  return (
    <main>
      <section className="hero " >
        <Container>
          <Row className="text-center my-5 " >
            <Col>
              <h2>Bienvenido a Lascano Repuestos</h2>
              <CarouselFadeExample images={frontImages} />
              <Link to="/shop">
                <Button variant="primary" className="mt-3" style={{ fontSize: '1.5rem', padding: '1rem 2rem', borderRadius: '0.5rem' }}>Buscar Producto</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="features py-5 bg-light">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>Envío Rápido</Card.Title>
                  <Card.Text>Recibe tu pedido en 24-48 horas.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>Mejor Calidad</Card.Title>
                  <Card.Text>Productos seleccionados con los más altos estándares.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="text-center">
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>Soporte 24/7</Card.Title>
                  <Card.Text>Estamos aquí para ayudarte en cualquier momento.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brands py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h3>Marcas con las que trabajamos</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <HorizontalCarousel images={brandImages} />
            </Col>
          </Row>
        </Container>
      </section>
      <div>
      {/* Otros componentes y contenido de la página */}
      <FooterSections />
      {/* Otros componentes y contenido de la página */}
    </div>
    </main>
  );
}

export default Home;
