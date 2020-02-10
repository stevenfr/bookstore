import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import RegLogPopUp from "./RegLogPopUp.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle);

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          Home
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <Dropdown nav isOpen={isOpen} toggle={toggle} direction="down">
            <DropdownToggle nav>
              <FontAwesomeIcon icon="user-circle" size="2x" />
            </DropdownToggle>
            <DropdownMenu right>
              <RegLogPopUp />
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
