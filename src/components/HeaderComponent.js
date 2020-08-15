import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';
import Logo from '../assets/images/logo-blue.gif'


class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <div class="header">
                <Navbar dark color="primary" fixed="top" expand="md">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-1" href="/">
                            <img src={Logo} alt="Logo"/>
                        </NavbarBrand>
                        <h3 className="name">Brenno Lima</h3>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link m-1" to="/">
                                        <a href="#profile" className="fa fa-user-circle fa-lg"> Profile</a>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link m-1" to="">
                                        <a href="#quote1" className="fa fa-calculator fa-lg"> Skills</a>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link m-1" to="/">
                                        <a href="#education" className="fa fa-graduation-cap fa-lg"> Education</a>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link m-1" to="/">
                                        <a href="#experience" className="fa fa-desktop fa-lg"> Experience</a>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link m-1" to="/">
                                        <a className="fa fa-gamepad fa-lg" href="#hobbies"> Hobbies</a>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link m-1" to="/">
                                        <a href="#contact" className="fa fa-phone fa-lg"> Contact</a>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;