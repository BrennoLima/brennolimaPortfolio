import React from 'react';
import { Item, Grid } from 'semantic-ui-react';
import CognizantLogo from '../../assets/images/cognizant-logo.png';
import SparkLogo from '../../assets/images/spark-logo.png';
import ADVRLogo from '../../assets/images/advr-logo.png';
import DevLogo from '../../assets/images/devconnector-logo.png';
import './experience.css';

const Experience = () => {
	return (
		<div className='container-fluid experience-container' id='experience'>
			<div className='container'>
				<div className='row mb-5'>
					<div className='col-12'>
						<h1 className='black mb-5'>Experience</h1>
					</div>
				</div>
				<Item.Group className='left-align mt-5 mb-5'>
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
									Java, Python, Selenium, Cucumber, Robot Framework, Jira, Git.
								</i>
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
				<hr />
				<div className='row mb-5 mt-5'>
					<div className='col-12 mb-5'>
						<h1 className='black'>Recent Projects and Designs</h1>
					</div>
				</div>
				<Grid columns={3} divided stackable>
					<Grid.Row>
						<Grid.Column>
							<Item.Group className='left-align'>
								<Item>
									<Item.Image
										size='tiny'
										src={SparkLogo}
										alt='Spark logo'
										as='a'
										href='https://sparklearning.herokuapp.com/'
									/>

									<Item.Content verticalAlign='middle'>
										<Item.Header>Spark Learning</Item.Header>
										<Item.Meta>REST API - 2020</Item.Meta>
										<Item.Meta>E-learning platform</Item.Meta>
										<Item.Description>
											Database: <strong>MongoDB</strong>
										</Item.Description>
										<Item.Description>
											Back-End: <strong>NodeJS/ExpressJS</strong>
										</Item.Description>
										<Item.Description>
											Front-End: <strong>React/Redux</strong>
										</Item.Description>
										<Item.Description>
											<a
												className='fa fa-github fa-lg black'
												href='https://github.com/BrennoLima/Spark'
											>
												GitHub
											</a>
										</Item.Description>
									</Item.Content>
								</Item>
							</Item.Group>
						</Grid.Column>
						<Grid.Column>
							<Item.Group className='left-align'>
								<Item>
									<Item.Image
										size='tiny'
										src={ADVRLogo}
										alt='ADVR logo'
										as='a'
										href='https://master.d2c26cs6suk604.amplifyapp.com/'
									/>

									<Item.Content verticalAlign='middle'>
										<Item.Header>ADVR</Item.Header>
										<Item.Meta>Front End Design - 2020</Item.Meta>
										<Item.Meta>Travel Blog</Item.Meta>
										<Item.Description>
											Front-End: <strong>React, Redux</strong>
										</Item.Description>
										<Item.Description>
											<strong>Fully responsible</strong>
										</Item.Description>
										<Item.Description>
											<a
												className='fa fa-github fa-lg black'
												href='https://github.com/BrennoLima/ADVR'
											>
												GitHub
											</a>
										</Item.Description>
									</Item.Content>
								</Item>
							</Item.Group>
						</Grid.Column>
						<Grid.Column>
							<Item.Group className='left-align'>
								<Item>
									<Item.Image
										size='tiny'
										src={DevLogo}
										alt='DevConnector logo'
										as='a'
										href='https://devconnectorreactapp.herokuapp.com/'
									/>

									<Item.Content verticalAlign='middle'>
										<Item.Header>DevConnector</Item.Header>
										<Item.Meta>REST API - 2020</Item.Meta>
										<Item.Meta>Developers Social Media</Item.Meta>
										<Item.Description>
											Database: <strong>MongoDB</strong>
										</Item.Description>
										<Item.Description>
											Back-End: <strong>NodeJS/ExpressJS</strong>
										</Item.Description>
										<Item.Description>
											Front-End: <strong>React/Redux</strong>
										</Item.Description>
										<Item.Description>
											<a
												className='fa fa-github fa-lg black'
												href='https://github.com/BrennoLima/DevConnector'
											>
												GitHub
											</a>
										</Item.Description>
									</Item.Content>
								</Item>
							</Item.Group>
						</Grid.Column>
					</Grid.Row>
				</Grid>

				<div className='row justify-content-center pt-5 pb-5'>
					<i className='mt-5'>
						“You don’t have to see the whole staircase, just take the first
						step.” – <strong>Martin Luther King, Jr.</strong>
					</i>
				</div>
			</div>
		</div>
	);
};

export default Experience;
