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
                    <div className="col-12 col-md-3 mb-3">
                        <a href="https://www.cognizant.com/canada"><img src={CognizantLogo} alt="CognizantLogo" className="exp-logo"/></a>
                    </div>
                    <div className="col-12 col-md-9 exp-title">
                        <h3>Cognizant - Junior Programmer Analyst (QA)</h3>
                        <h6>Aug 2019 - Mar 2020</h6>
                        <div className="exp-text">
                            <p>• Produce clean, and efficient code based on client specifications (financial sector).</p>
                            <p>• Develop, organize, and execute detailed comprehensive and well-structured test plans and test cases to prevent failure in essential features (manual and automated).</p>
                            <p>• Collaborate with developers to identify and fix root-cause bugs.</p>
                            <p>• Troubleshoot, debug, and upgrade existing software to meet client needs.</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 quote">
                            <p>“You don’t have to see the whole staircase, just take the first step.” – <strong>Martin Luther King, Jr.</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;  