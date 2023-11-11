import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import DropDown from './components/dropdown';

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            Document Upload
          </p>
        </header>

        <Row>
          <Col>
            <div>
              <DropDown />
            </div>
          </Col>
          <Col>
            <div>
              <DropDown />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              <DropDown />
            </div>
          </Col>
          <Col>
            <div>
              <DropDown />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
