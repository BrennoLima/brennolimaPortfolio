import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Collapse,
	NavbarToggler,
} from 'reactstrap';
import OnOutsiceClick from 'react-outclick';
import Logo from '../../assets/images/bl-logo.png';

const NavbarComponent = () => {
	const [Navb, setNavbar] = useState(false);
	const toggleNav = () => {
		setNavbar(!Navb);
	};
	const closeNav = () => {
		setNavbar(false);
	};

	return (
		<OnOutsiceClick onOutsideClick={closeNav}>
			<Navbar dark color='primary' fixed='top' expand='md'>
				<NavbarBrand href='/'>
					<img src={Logo} alt='Logo' className='logo-bl' /> Brenno Lima
				</NavbarBrand>
				<NavbarToggler onClick={toggleNav} />
				<Collapse isOpen={Navb} navbar>
					<Nav navbar className='ml-auto'>
						<NavItem>
							<NavLink className='nav-link nav-custom' href='#profile'>
								<span className='fa fa-user-circle fa-lg'> Profile</span>
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink className='nav-link' href='#skills'>
								<span className='fa fa-calculator fa-lg'> Skills</span>
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink className='nav-link' href='#education'>
								<span className='fa fa-graduation-cap fa-lg'> Education</span>
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink className='nav-link' href='#experience'>
								<span className='fa fa-desktop fa-lg'> Experience</span>
							</NavLink>
						</NavItem>

						<NavItem>
							<NavLink className='nav-link' href='#contact'>
								<span className='fa fa-phone fa-lg'> Contact</span>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</OnOutsiceClick>
	);
};

export default NavbarComponent;
