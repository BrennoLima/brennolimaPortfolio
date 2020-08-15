import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Profile from './components/ProfileComponent'
import Skills from './components/SkillsComponent'
import Education from './components/EducationComponent'
import Experience from './components/ExperienceComponent'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header/>
        <Profile/>
        <Skills/>
        <Education/>
        <Experience/>
        <Footer/>
      </div>
    );
  }

}

export default App;
