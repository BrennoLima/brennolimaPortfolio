import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';
import OnOutsiceClick from 'react-outclick';
import Logo from '../assets/images/logo-blue.gif'


class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    closeNav(){
        this.setState({
            isNavOpen: false
        });
    }

    render(){
        return(
            <div className="container-fluid">
                <OnOutsiceClick onOutsideClick={this.closeNav}>
                    <Navbar dark color="primary" fixed="top" expand="md">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand href="/"><img src={Logo} alt="Logo"/>Brenno Lima</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" href="#profile">
                                        <span className="fa fa-user-circle fa-lg"> Profile</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#skills">
                                        <span  className="fa fa-calculator fa-lg"> Skills</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#education">
                                        <span className="fa fa-graduation-cap fa-lg"> Education</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#experience">
                                        <span  className="fa fa-desktop fa-lg"> Experience</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#contact">
                                        <span  className="fa fa-phone fa-lg"> Contact</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>   
                </OnOutsiceClick>
            </div>
        );
    }
}

export default Header;