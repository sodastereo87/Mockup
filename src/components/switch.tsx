import Form from 'react-bootstrap/Form';
import switchCSS from './switch.module.css'

function Switch() {
  return (
    <Form className={switchCSS.text}>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Toggle ON &nbsp;&nbsp;|&nbsp;&nbsp; Select Tolerance Level"
        // Set this prop to true to toggle the switch on by default
        defaultChecked  
      />
    </Form>
  );
}

export default Switch;