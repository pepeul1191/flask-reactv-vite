import React, { Component } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Footer } from 'react-bootstrap';
import { getSlider } from '../../../services/demo_service.js';

class HomePage extends Component {
  constructor(props) {
    super(props);
    // Estado inicial del componente
    this.state = {
      contador: 0,
      items: [],
    };
  }

  // Método para manejar el incremento del contador
  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  // Método del ciclo de vida que se ejecuta después de que el componente se monta
  componentDidMount() {
    console.log('Componente montado');
    getSlider().then((resp) => {
      console.log(resp)
      this.setState({ items: resp.data });
    }).catch((resp) =>  {
      console.error(resp.status)
      console.error(resp)
    })
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
        <Container className="my-5 p-5 bg-light border">
          <h1>Welcome to Our Service</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content.</p>
          <Button variant="primary">Learn More</Button>
        </Container>

        <Container className="my-5">
          <Row xs={1} md={3} className="g-4">
            {this.state.items.map((item, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={item.image || "https://via.placeholder.com/100x160"} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary" onClick={() => this.handleClick(item.id)}>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
