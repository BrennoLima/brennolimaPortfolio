import React, { Component } from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import Footer from './components/FooterComponent';
import Profile from './components/Profile/ProfileComponent';
import Skills from './components/Skills/SkillsComponent';
import Education from './components/Education/EducationComponent';
import Experience from './components/Experience/ExperienceComponent';
import 'animate.css/animate.min.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<NavbarComponent />
				<Profile />
				<Skills />
				<Education />
				<Experience />
				<Footer />
			</div>
		);
	}
}

export default App;
