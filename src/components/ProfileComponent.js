import React, { Component } from 'react';
import {Card, CardBody, Label} from 'reactstrap';
import ProfilePicture from '../assets/images/Image-3.jpg'

class Profile extends Component{

    render(){
        return(
            <div className="padding" id="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1>Profile</h1><br/>
                            <h5>Web Developer</h5>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-3 offset-md-1">
                            <h2>About Me</h2>
                            <hr/>
                            <p>Hi! Thanks for visiting my personal page. I am Brenno, from Brazil, and living in Canada since 2017. I am passionate about technology since I was a kid and I always wondered how the computer was able to perform so many amazing things. That curiosity leaded me to study more about computers and to who I am today.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <Card>
                                <CardBody>  
                                <img src={ProfilePicture} alt="Brenno" width="100%"/>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-3">
                            <h2>Details</h2>
                            <hr/>
                            <div className="profile-details">
                                <Label><b>Name:</b></Label><br/>
                                <Label>Brenno Cesar Ferreira Lima</Label><br/>
                                <Label><b>Age:</b></Label><br/>
                                <Label>23 years</Label><br/>
                                <Label><b>Location:</b></Label><br/>
                                <Label>Toronto, ON.</Label><br/><br/>
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
            </div>
        );
    }
}

export default Profile;