import Form from 'react-bootstrap/Form';
import switchCSS from './switch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function Switch() {
  return (
    <Form className={switchCSS.text}>
      {/* Bootstrap component representing a switch input */}
      <Form.Check 
        type="switch"
        id="custom-switch"
        label={
          <>
            &nbsp;&nbsp;Toggle ON&nbsp;&nbsp;|&nbsp;&nbsp;
            {/* clock icon  */}
            <FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;Select Tolerance Level
          </>
        }
        defaultChecked  
      />
    </Form>
  );
}

export default Switch;