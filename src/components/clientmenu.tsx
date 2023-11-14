// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import clientMenuCSS from './clientmenu.module.css'

// function ClientMenu() {
//   return (
//     <Dropdown className={clientMenuCSS.menu}>
//       <Dropdown.Toggle variant="" id="dropdown-basic" style={{color:'darkblue' }}>
//       Select Client:
//       </Dropdown.Toggle>

//       <Dropdown.Menu className={clientMenuCSS.menu2}>
//         <Dropdown.Item href="#/action-1">Client 1</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Client 2</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default ClientMenu;

import React from 'react';

const ClientMenu: React.FC = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
};

export default ClientMenu;
