import React, {Component} from 'react';
import {Navbar, NavbarBrand, Button, Nav, NavItem} from 'reactstrap';
import Logo from '../assets/images/logo-blue.gif'


class Header extends Component{

    render(){
        return(
            <div>
                <Navbar dark color="primary" fixed="top">
                    <div className="container-fluid">
                        <NavbarBrand href="/"><img src={Logo} alt="Logo"/>Brenno Lima</NavbarBrand>
                        <Nav pills>
                            <NavItem><Button color="primary" size="lg" href="/">Profile</Button></NavItem>
                            <NavItem><Button color="primary" size="lg">Skills</Button></NavItem>
                            <NavItem><Button color="primary" size="lg">Experience</Button></NavItem>
                            <NavItem><Button color="primary" size="lg">Hobbies</Button></NavItem>
                            <NavItem><Button color="primary" size="lg">Contact</Button></NavItem>
                        </Nav>
                    
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;