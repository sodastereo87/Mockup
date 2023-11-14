import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import DropDown from './components/dropdown';
import Question from './components/checkbox';
import FileDrop from './components/draganddrop';
import Switch from './components/switch';

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <p className='title'>
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
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px'}}></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                 <FileDrop />
                </div>
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px'}}></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <p>Elapse Data Checking:</p>
                  <p>No Elapsed Dates!</p>
                </div>
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px'}}></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <p>Tolerance Window:</p>
                  <Switch />
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
              <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px'}}></div>
            </Row>

            <Row>
              <Col>
                <div>
                  <p>Location Checking:</p>
                  <p>All Available!</p>
                </div>
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px'}}></div>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
