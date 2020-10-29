import React from 'react';
import { Item } from 'semantic-ui-react';
import SenecaLogo from '../../assets/images/seneca-logo2.png';
import UNBLogo from '../../assets/images/unb-logo2.png';
import CourseraLogo from '../../assets/images/coursera-logo.png';
import UdemyLogo from '../../assets/images/udemy-logo.png';
import './education.css';

const Education = () => {
	return (
		<div className='container education-container' id='education'>
			<div className='row mb-5'>
				<div className='col-12'>
					<h1>Education</h1>
				</div>
			</div>

			<Item.Group className='left-align'>
				<Item>
					<Item.Image
						size='small'
						src={SenecaLogo}
						alt='Seneca College logo'
						as='a'
						href='https://www.senecacollege.ca/programs/fulltime/CPP.html'
					/>

					<Item.Content verticalAlign='middle'>
						<Item.Header>Computer Programmer</Item.Header>
						<Item.Meta>Seneca College, Toronto, ON.</Item.Meta>
						<Item.Meta>2017 - 2019</Item.Meta>
						<Item.Description>College Diploma.</Item.Description>
						<Item.Description>Honor graduation.</Item.Description>
					</Item.Content>
				</Item>
				<hr />
				<Item>
					<Item.Image
						size='small'
						src={UNBLogo}
						alt='UnB logo'
						as='a'
						href='https://www.unb.br/'
					/>

					<Item.Content verticalAlign='middle'>
						<Item.Header>Computer Science </Item.Header>
						<Item.Meta>Universidade de Brasilia, Brasil.</Item.Meta>
						<Item.Meta>2014 - 2017</Item.Meta>
					</Item.Content>
				</Item>
			</Item.Group>
			<div className='row mb-5 mt-5'>
				<div className='col-12'>
					<h1>Licenses and Certifications</h1>
				</div>
			</div>
			<Item.Group className='left-align'>
				<Item>
					<Item.Image
						size='tiny'
						src={CourseraLogo}
						alt='Coursera logo'
						as='a'
						href='http://coursera.com/'
					/>

					<Item.Content verticalAlign='middle'>
						<Item.Header>Coursera</Item.Header>
						<Item.Description>
							∙ Full-Stack Web Development with React Specialization - 2020
						</Item.Description>
						<Item.Description>
							∙ Front-End Web Development with React - 2020
						</Item.Description>
						<Item.Description>
							∙ Front-End Web UI Frameworks and Tools: Bootstrap 4 - 2020
						</Item.Description>
						<Item.Description>
							∙ IBM Data Science Professional Certificate - 2020
						</Item.Description>
					</Item.Content>
				</Item>
				<hr />
				<Item>
					<Item.Image
						size='tiny'
						src={UdemyLogo}
						alt='Udemy logo'
						as='a'
						href='https://www.udemy.com/'
					/>

					<Item.Content verticalAlign='middle'>
						<Item.Header>Udemy </Item.Header>
						<Item.Description>
							∙ MERN Stack Front To Back: Full Stack React, Redux and Node.js -
							2020
						</Item.Description>
						<Item.Description>
							∙ Modern React with Redux - 2020
						</Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>
			<div className='row justify-content-center education-quota'>
				<i>
					“Anyone who has never made a mistake has never tried anything new.” –{' '}
					<strong>Albert Einstein</strong>
				</i>
			</div>
		</div>
	);
};

export default Education;
