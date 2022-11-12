import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Icono from '../logo.png';
function NavBar() {
  return (
    <>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <div className="d-flex justify-content-center">
          <img src={Icono} width="200px" alt="" />
        </div>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" style={{ color: 'white' }}>
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" style={{ color: 'white' }}>
              Help
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default NavBar;
