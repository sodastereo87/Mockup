import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import DropDown from './components/dropdown';
import Question from './components/checkbox';

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
            <Question question="Split schedule using social distancing?" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
           
            </div>
          </Col>
          <Col>
            <div>
             <p>Location Checking:</p>
             <p>All Available!</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
