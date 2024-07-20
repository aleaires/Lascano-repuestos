import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Sobre Nosotros</h1>
          <p className="text-justify">
            Bienvenido a <strong>[Nombre de la Empresa]</strong>, tu tienda en línea de confianza para todos tus <strong>[productos/servicios]</strong> favoritos. Fundada en <strong>[año]</strong>, nuestra misión es ofrecerte la mejor calidad y variedad de <strong>[productos/servicios]</strong>, garantizando siempre tu satisfacción.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Nuestra Historia</Card.Title>
              <Card.Text>
                <strong>[Nombre de la Empresa]</strong> comenzó con la visión de <em>[breve historia de cómo comenzó la empresa, por ejemplo, "ofrecer productos únicos y de alta calidad que no se encuentran en las tiendas convencionales. Desde nuestros humildes comienzos en un pequeño garaje, hemos crecido hasta convertirnos en una de las tiendas en línea más respetadas en el sector."]</em>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>¿Por Qué Elegirnos?</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Variedad de productos de alta calidad</ListGroup.Item>
                <ListGroup.Item>Atención al cliente excepcional</ListGroup.Item>
                <ListGroup.Item>Envíos rápidos y seguros</ListGroup.Item>
                <ListGroup.Item>Política de devolución fácil</ListGroup.Item>
                <ListGroup.Item>Precios competitivos</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Nuestro Equipo</Card.Title>
              <Card.Text>
                Estamos orgullosos de contar con un equipo de profesionales dedicados y apasionados por <strong>[la industria en la que operan]</strong>. Nuestro equipo trabaja arduamente para asegurarse de que cada cliente tenga una experiencia de compra excelente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contáctanos</Card.Title>
              <Card.Text>
                Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través de <a href="mailto:contacto@empresa.com">contacto@empresa.com</a> o llámanos al <strong>[número de teléfono]</strong>. Estamos aquí para ayudarte.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
