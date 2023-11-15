import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import dropclientCSS from './clientmenu.module.css'

function ClientMenu() {
  return (
    <Dropdown className={dropclientCSS.menuclient1}>
      <Dropdown.Toggle variant="" id="dropdown-basic" style={{color:'darkblue' }} >
      Select Client:
      </Dropdown.Toggle>

      <Dropdown.Menu className={dropclientCSS.menuclient2}>
        <Dropdown.Item href="#/action-1">Client 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Client 2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ClientMenu;