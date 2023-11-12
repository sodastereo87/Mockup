import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import DropDown from './components/dropdown';
import Question from './components/checkbox';
import FileDrop from './components/draganddrop';

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
          {/* First column */}
          <Col>
            <Row>
              <Col>
                <div>
                  <DropDown />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                 <FileDrop />
                </div>
              </Col>
            </Row>
          </Col>

          {/* Second column */}
          <Col>
            <Row>
              <div>
                <Question question="Split schedule using social distancing?" />
              </div>
            </Row>

            <Row>
              <Col>
                <div>
                  <p>Location Checking:</p>
                  <p>All Available!</p>
                </div>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
