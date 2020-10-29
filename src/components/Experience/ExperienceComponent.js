import React from 'react';
import { Item } from 'semantic-ui-react';
import CognizantLogo from '../../assets/images/cognizant-logo.png';
import SparkLogo from '../../assets/images/spark-logo.png';
import './experience.css';

const Experience = () => {
	return (
		<div className='container-fluid experience-container' id='experience'>
			<div className='container'>
				<div className='row mb-5'>
					<div className='col-12'>
						<h1 className='black'>Experience</h1>
					</div>
				</div>
				<Item.Group className='left-align'>
					<Item>
						<Item.Image
							size='small'
							src={CognizantLogo}
							alt='Cognizant logo'
							as='a'
							href='https://www.cognizant.com/canada'
						/>

						<Item.Content verticalAlign='middle'>
							<Item.Header>Programmer Analyst</Item.Header>
							<Item.Meta>Cognizant, Toronto, ON.</Item.Meta>
							<Item.Meta>Aug 2019 - Mar 2020</Item.Meta>
							<Item.Description>
								∙ Review code for accuracy and run tests for quality assurance.
							</Item.Description>
							<Item.Description>
								∙ Perform regression, and integration testing to verify software
								quality.
							</Item.Description>
							<Item.Description>
								∙ Analyze customer needs to create and implement appropriate
								solutions.
							</Item.Description>
							<Item.Description>
								∙ Collaborated with developers to identify and fix root-cause
								bugs.
							</Item.Description>
							<Item.Description>
								∙ Troubleshoot, debug, and upgrade existing software to meet
								client needs.
							</Item.Description>
							<Item.Description>
								∙ Develop, organize, and execute test plans and test cases to
								prevent failure in essential features (Manual and Automated).
							</Item.Description>
							<Item.Description>
								Most used tools and technologies:{' '}
								<i>
									Java, Python, Selenium, Cucumber, RobotFramework, Jira, Git.
								</i>
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
				<hr />
				<div className='row mb-5 mt-5'>
					<div className='col-12'>
						<h1 className='black'>Recent Projects and Designs</h1>
					</div>
				</div>

				<Item.Group className='left-align'>
					<Item>
						<Item.Image
							size='tiny'
							src={SparkLogo}
							alt='Cognizant logo'
							as='a'
							href='https://sparklearning.herokuapp.com/'
						/>

						<Item.Content verticalAlign='middle'>
							<Item.Header>Spark Learning</Item.Header>
							<Item.Meta>REST API - 2020</Item.Meta>
							<Item.Description>
								Database: <strong>MongoDB</strong>
							</Item.Description>
							<Item.Description>
								Back-End: <strong>NodeJS/ExpressJS</strong>
							</Item.Description>
							<Item.Description>
								Front-End: <strong>React/Redux</strong>
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
				<div className='row justify-content-center pt-5 pb-5'>
					<i>
						“You don’t have to see the whole staircase, just take the first
						step.” – <strong>Martin Luther King, Jr.</strong>
					</i>
				</div>
			</div>
		</div>
	);
};

export default Experience;
