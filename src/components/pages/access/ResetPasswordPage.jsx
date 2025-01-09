import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ResetPasswordPage.css';

class ResetPasswordPage extends Component {
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
      <div className="login-container">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} md={4} className="login-form">
              <h2>Recuperar Contraseña</h2>
              <Form>
                <Form.Group className="mb-3" controlId="recoveryEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Recuperar Contraseña
                </Button>
              </Form>
              <div className="mt-3">
                <Nav.Link as={Link} to="/sign-in">Ingresar al sistema</Nav.Link>
                <Nav.Link as={Link} to="/sign-up">¿No tienes cuenta? Regístrate</Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResetPasswordPage;
