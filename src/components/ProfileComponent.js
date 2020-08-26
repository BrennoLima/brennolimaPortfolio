import React, { Component } from 'react';
import {Card, CardBody, Label} from 'reactstrap';
import ProfilePicture from '../assets/images/b082020.jpg'
import ResumePDF from '../shared/BrennoLima082020.pdf'
import ScrollAnimation from 'react-animate-on-scroll';

class Profile extends Component{

    render(){
        return(
            <div className="padding container" id="profile">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Profile</h1>
                        </div>
                        <div className="col-12 mt-4">
                            <ScrollAnimation offset={10} animateIn="animate__fadeInDown" animateOnce delay={300}>
                                <h3>Web Developer</h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-3 offset-md-1">        
                            <h2>About Me</h2>
                            <hr/>
                            <ScrollAnimation offset={10} animateIn="animate__fadeInLeft" animateOnce delay={300}>
                                <p>Hi! Thanks for visiting my personal page. I am Brenno, from Brazil, and living in Canada since 2017. I am passionate about technology since I was a kid and I always wondered how the computer was able to perform so many amazing things. That curiosity leaded me to study more about computers and to who I am today.</p>
                            </ScrollAnimation>
                            
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <Card>
                                <CardBody>  
                                <img src={ProfilePicture} alt="Brenno" width="100%"/>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3 mt-5 mt-md-0">
                            <h2>Details</h2>
                            <hr/>
                            <div className="profile-details">
                            <ScrollAnimation offset={10} animateIn="animate__fadeInRight" animateOnce delay={300}>
                                <Label><b>Name:</b></Label><br/>
                                <Label>Brenno Cesar Ferreira Lima</Label><br/>
                                <Label><b>Age:</b></Label><br/>
                                <Label>23 years</Label><br/>
                                <Label><b>Location:</b></Label><br/>
                                <Label>Toronto, ON.</Label><br/>
                                <Label><b>Resume:</b></Label><br/>
                                <a className="black fa fa-file-pdf-o" href={ResumePDF} download> Resume.pdf</a>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 quote" id="quote1">
                                <p>"Nothing is particularly hard if you divide it into small jobs." – <strong>Henry Ford</strong> </p>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Profile;