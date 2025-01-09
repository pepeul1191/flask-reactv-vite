import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class HomePage extends Component {
  constructor(props) {
    super(props);
    // Estado inicial del componente
    this.state = {
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

  handleClick = (id) => {
    alert(id);
  }

  render() {
    return (
      <>
        <Container>
          <Row className="mt-4">
            <Col md={6}>
              <img src="/img/contact.png" alt="Contact Us" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h2>Contact Us</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
