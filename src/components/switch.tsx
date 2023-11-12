import Form from 'react-bootstrap/Form';

function Switch() {
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Toggle ON"
      />
    </Form>
  );
}

export default Switch;