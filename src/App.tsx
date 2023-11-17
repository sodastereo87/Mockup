import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropDown from './components/dropdown';
import Question from './components/checkbox';
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
          <div className="close-icon">
            <span className="x-icon">×</span>
          </div>
          <p className='title'>Document Upload</p>
          <div style={{ borderBottom: '1px solid #bbb', width: '18%', marginBottom: '20px', marginTop: '0px'}}></div>
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
                  <Client client={'Client:'} />
                </div>
                <div>
                  <Row style={{ marginTop: '30px', textAlign: 'left'}}>
                    <Col sm={4}>
                      <p style={{ padding: '8px'}}>
                        Testing Center 1</p>
                      <p style={{ padding: '8px'}}>
                        Testing Center 2</p>
                      <p style={{ padding: '8px'}}>
                        Testing Center 3</p>
                      <p style={{ padding: '8px'}}>
                        Testing Center 4</p>
                    </Col>
                    <Col sm={8}>
                      <ClientMenu />
                      <ClientMenu />
                      <ClientMenu />
                      <ClientMenu />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
    
        {/* "Continue to import" bottom section */}
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
