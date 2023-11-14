import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import DropDown from './components/dropdown';
import Question from './components/checkbox';
import FileDrop from './components/draganddrop';
import Switch from './components/switch';
import Paragraph from './components/location';
import Client from './components/client';
import Buttons from './components/buttons';
import ClientMenu from './components/clientmenu';
import FileUploader from './components/draganddrop';

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <p className='title'>Document Upload</p>
        </header>

        <Row>
          {/* First column */}
          <Col>
            <Row>
              <Col>
                <div>
                  <DropDown />
                </div>
                <div style={{ borderBottom: '1px solid #bbb', marginBottom: '20px', width: '50%'}}></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <FileUploader />
                </div>
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px', marginTop: '20px'}}></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <Paragraph content="Elapse Data Checking:" />
                  <div style={{color:'mediumseagreen'}}>
                    <Paragraph content="No Elapsed Dates!" />
                  </div>
                </div>
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px'}}></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <Paragraph content="Tolerance Window:" />
                  <Switch />
                </div>
              </Col>
            </Row>

          </Col>

          {/* Second column */}
          <Col style={{ borderLeft: '10%' }}>
            <Row>
              <Col>
                <div>
                  <Question question="Split schedule using social distancing?" />
                </div>
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px',}}></div>
              </Col>
            </Row>
           
            <Row>
              <Col>
                <Paragraph content="Location Checking:" />
                  <div style={{color:'mediumseagreen'}}>
                    <Paragraph content="All Available!" />
                  </div>
                <div style={{ borderBottom: '1px solid #bbb', width: '50%', marginBottom: '20px'}}></div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <Paragraph content="Client:" />
                  <Client client={''} />
                </div>
                <div>
             
                </div>
              </Col>
            </Row>

          </Col>
        </Row>

        {/* "Continue to import" section */}
        <Row>
          <Col>
            <div>
              <Buttons
                questionText="Data in the import file is correct. Please press Continue to import."
                option1Text="Continue Import"
                option2Text="Cancel"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
