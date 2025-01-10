import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

class SignUpPage extends Component {
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
    document.title = 'Crear Cuenta';
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
              <h2>Crear Cuenta</h2>
              <Form>
                <Form.Group className="mb-3" controlId="signupUsername">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" placeholder="Nombre de usuario" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupEmail">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Correo electrónico" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupConfirmPassword">
                  <Form.Label>Confirmar Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Confirmar contraseña" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Registrarse
                </Button>
              </Form>
              <div className="mt-3">
                <Nav.Link as={Link} to="/sign-in">Ingresar al sistema</Nav.Link>
                <Nav.Link as={Link} to="/reset-password">Olvidé mi contraseña</Nav.Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignUpPage;
