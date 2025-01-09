import React, { Component } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    // Estado inicial del componente
    this.state = {
      contador: 0
    };
  }

  // Método para manejar el incremento del contador
  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  // Método del ciclo de vida que se ejecuta después de que el componente se monta
  componentDidMount() {
    console.log('Componente montado');
  }

  // Método del ciclo de vida que se ejecuta justo antes de que el componente se desmonte
  componentWillUnmount() {
    console.log('Componente a punto de desmontarse');
  }

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <Image src="/img/about.jpg" fluid />
          </Col>
          <Col md={6}>
            <h2>Acerca de Nosotros</h2>
            <p>
              Somos una empresa dedicada a [describir brevemente el objetivo o misión de la empresa].
              Fundada en [año], hemos crecido para convertirnos en uno de los líderes en [industria/servicio].
            </p>
            <p>
              Nuestro equipo está compuesto por profesionales apasionados que están comprometidos con 
              ofrecer calidad y excelencia en todos nuestros productos y servicios.
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <h3>Nuestros Valores</h3>
            <Card>
              <Card.Body>
                <Card.Title>Integridad</Card.Title>
                <Card.Text>
                  Mantenemos los más altos estándares de integridad en todas nuestras acciones.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Calidad</Card.Title>
                <Card.Text>
                  Nos esforzamos por ofrecer los mejores productos y servicios de su clase.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Innovación</Card.Title>
                <Card.Text>
                  Innovamos constantemente para satisfacer y superar las expectativas de nuestros clientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutPage;
