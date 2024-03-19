import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </Col>
          <Col md={6}>
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://www.facebook.com/">Facebook</a></li>
              <li className="list-inline-item"><a href="https://twitter.com/i/flow/login">Twitter</a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">&copy; 2022 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
