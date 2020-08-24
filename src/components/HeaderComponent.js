import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';
import OnOutsiceClick from 'react-outclick';
import Logo from '../assets/images/logo-blue.gif'
import ScrollAnimation from 'react-animate-on-scroll';

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
                        <ScrollAnimation offset={10} animateIn="animate__fadeInLeft" animateOnce delay={300}>
                            <NavbarBrand href="/"><img src={Logo} alt="Logo"/>Brenno Lima</NavbarBrand>
                        </ScrollAnimation>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" href="#profile">
                                        <ScrollAnimation offset={10} animateIn="animate__fadeInRight" animateOnce delay={300}>
                                            <span className="fa fa-user-circle fa-lg"> Profile</span>
                                        </ScrollAnimation>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#skills">
                                        <ScrollAnimation offset={10} animateIn="animate__fadeInRight" animateOnce delay={300}>
                                            <span  className="fa fa-calculator fa-lg"> Skills</span>
                                        </ScrollAnimation>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#education">
                                        <ScrollAnimation offset={10} animateIn="animate__fadeInRight" animateOnce delay={300}>
                                            <span className="fa fa-graduation-cap fa-lg"> Education</span>
                                        </ScrollAnimation>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#experience">
                                        <ScrollAnimation offset={10} animateIn="animate__fadeInRight" animateOnce delay={300}>
                                            <span  className="fa fa-desktop fa-lg"> Experience</span>
                                        </ScrollAnimation>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="#contact">
                                        <ScrollAnimation offset={10} animateIn="animate__fadeInRight" animateOnce delay={300}>
                                            <span  className="fa fa-phone fa-lg"> Contact</span>
                                        </ScrollAnimation>
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