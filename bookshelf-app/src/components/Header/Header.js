import React , { useState } from 'react';
import "./styles"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import navigation from "../.././navigation"
import { Link } from "react-router-dom"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">BookShelf App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
                navigation.left.map(item => {
                    return ( 
                    <NavItem>
                        <NavLink tag={Link} to={item.to}>{item.title}</NavLink>
                    </NavItem>
                    )
                })
            }
          </Nav>
          {
              navigation.right.map(item => {
                  return (
                    <NavbarText tag={Link} to={item.to}>{item.title}</NavbarText>
                  )
              })
          }
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
