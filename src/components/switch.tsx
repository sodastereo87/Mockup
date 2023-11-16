import Form from 'react-bootstrap/Form';
import switchCSS from './switch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function Switch() {
  return (
    <Form className={switchCSS.text}>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label={
          <>
            &nbsp;&nbsp;Toggle ON&nbsp;&nbsp;|&nbsp;&nbsp;<FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;Select Tolerance Level
          </>
        }
        defaultChecked  
      />
    </Form>
  );
}

export default Switch;