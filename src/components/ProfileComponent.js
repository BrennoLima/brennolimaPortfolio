import React, { Component } from 'react';
import {Card, CardText, CardBody, Label} from 'reactstrap';
import ProfilePicture from '../assets/images/Image-3.jpg'

class Profile extends Component{

    render(){
        return(
            <div className="profile">
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
                            luke Barbary Coast poop deck grog blossom Admiral of the Black hogshead cutlass brig stern hands. Jib careen doubloon Jolly Roger line hornswaggle cable spirits bounty main sheet. Gally bowsprit spirits pinnace lugsail holystone nipperkin Cat o'nine tails keel rigging.y marooned league reef galleon pillage.
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
                </div>
            </div>
        );
    }


}

export default Profile;