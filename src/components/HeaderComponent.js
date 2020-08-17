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
            <div className="container-fluid">
                <Navbar dark color="primary" fixed="top" expand="md">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand href="/"><img src={Logo} alt="Logo"/>Brenno Lima</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <a href="#profile" className="fa fa-user-circle fa-lg"> Profile</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="">
                                    <a href="#skills" className="fa fa-calculator fa-lg"> Skills</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <a href="#education" className="fa fa-graduation-cap fa-lg"> Education</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <a href="#experience" className="fa fa-desktop fa-lg"> Experience</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <a href="#contact" className="fa fa-phone fa-lg"> Contact</a>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>   
            </div>
        );
    }
}

export default Header;