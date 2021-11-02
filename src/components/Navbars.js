import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import "./All.css";
import MoogiBar from "./MoogiBar";

const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="navbar">
      <MoogiBar />
      <Navbar className="logoBar" light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
            <NavItem>
              <NavbarBrand href="/" className="pageButtons">
              <h2>Ana Sayfa</h2>
              </NavbarBrand>
              </NavItem>
              <NavItem>
                <NavbarBrand href="/urunler" className="pageButtons m-l-9"><h2>Ürünler</h2></NavbarBrand>
              </NavItem>
              <NavItem>
                <NavbarBrand href="/hizmetlerimiz" className="pageButtons m-l-9"><h2>Hizmetlerimiz</h2></NavbarBrand>
              </NavItem>
              <NavItem>
                <NavbarBrand href="/hakkımızda" className="pageButtons m-l-9"><h2>Hakkımızda</h2></NavbarBrand>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
