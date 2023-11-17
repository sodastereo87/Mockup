import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import dropclientCSS from './clientmenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

function ClientMenu() {
  return (
    <div className="d-flex align-items-center">
      <Dropdown className={dropclientCSS.menuclient1}>
        <Dropdown.Toggle variant="" id="dropdown-basic" style={{ color: 'darkblue' }}>
          Select Client:
        </Dropdown.Toggle>
        <Dropdown.Menu className={dropclientCSS.menuclient2}>
          <Dropdown.Item href="#/client-1">Client 1</Dropdown.Item>
          <Dropdown.Item href="#/client-2">Client 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <FontAwesomeIcon icon={faClock} className={`ml-2 ${dropclientCSS.clockIcon}`} style={{ marginBottom: '15px', 
    marginLeft: '15px'}}/>
    </div>
  );
}

export default ClientMenu;