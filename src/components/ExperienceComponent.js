import React from 'react';
import { Media } from 'reactstrap';
import CognizantLogo from '../assets/images/cognizant-logo.jpg';

function Experience (props) {
    return(
        <div className="section" id="experience" fluid>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="black">Experience</h1>
                    </div>
                </div>
                <div className="row mt">
                    <div className="col-12">
                        <Media>
                            <Media left href="https://www.senecacollege.ca/home.html">
                                <Media object src={CognizantLogo} alt="Cognizant logo"/>
                            </Media>
                            <Media body>
                                <Media heading className="ml-3">Cognizant - Junior Programmer Analyst (QA)</Media>
                                <p className="ml-3">Aug 2019 - Mar 2020</p>
                                <p className="ml-3">• Produce clean, and efficient code based on client specifications (financial sector).</p>
                                <p className="ml-3">• Developed, organized, and executed detailed comprehensive and well-structured test plans and test cases to prevent failure in essential features (manual and automated).</p>
                                <p className="ml-3">• Collaborated with developers to identify and fix root-cause bugs.</p>
                                <p className="ml-3">• Troubleshoot, debug, and upgrade existing software to meet client needs.</p>
                            </Media>
                        </Media>
                        <hr/>
                    </div>
                    
                </div>
                <div className="container mt-5">
                <div className="row">
                        <div className="col-12 quote" id="quote1">
                            <p>“You don’t have to see the whole staircase, just take the first step.” – <strong>Martin Luther King, Jr.</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;  