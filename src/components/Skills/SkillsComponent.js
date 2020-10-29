import React from 'react';
import { SKILLS } from '../../shared/skills';
import { Rating, List, Segment, Grid } from 'semantic-ui-react';
import './skills.css';

const Skills = () => {
	const RenderSkill = ({ skill }) => {
		return (
			<List.Item>
				<List.Content floated='left'>{skill.name}</List.Content>
				<List.Content floated='right'>
					<Rating
						icon='star'
						defaultRating={skill.level}
						maxRating={5}
						disabled
					/>
				</List.Content>
			</List.Item>
		);
	};
	const skillsLanguages = SKILLS.map((skill, index) => {
		if (skill.type === 'languages') {
			return <RenderSkill skill={skill} key={index} />;
		}
		return <React.Fragment />;
	});
	const skillsLanguagesHeader = (
		<List.Item>
			<List.Header>Programming Languages</List.Header>
		</List.Item>
	);
	const skillsFront = SKILLS.map((skill, index) => {
		if (skill.type === 'front') {
			return <RenderSkill skill={skill} key={index} />;
		}
		return <React.Fragment />;
	});
	const skillsFrontHeader = (
		<List.Item>
			<List.Header>Front-End Development</List.Header>
		</List.Item>
	);
	const skillsBack = SKILLS.map((skill, index) => {
		if (skill.type === 'back') {
			return <RenderSkill skill={skill} key={index} />;
		}
		return <React.Fragment />;
	});
	const skillsBackHeader = (
		<List.Item>
			<List.Header>Back-End Development</List.Header>
		</List.Item>
	);
	const skillsData = SKILLS.map((skill, index) => {
		if (skill.type === 'data') {
			return <RenderSkill skill={skill} key={index} />;
		}
		return <React.Fragment />;
	});
	const skillsDataHeader = (
		<List.Item>
			<List.Header>Databases</List.Header>
		</List.Item>
	);
	const skillsTest = SKILLS.map((skill, index) => {
		if (skill.type === 'test') {
			return <RenderSkill skill={skill} key={index} />;
		}
		return <React.Fragment />;
	});
	const skillsTestHeader = (
		<List.Item>
			<List.Header>Quality Assurance</List.Header>
		</List.Item>
	);
	const skillsIndustry = SKILLS.map((skill, index) => {
		if (skill.type === 'industry') {
			return <RenderSkill skill={skill} key={index} />;
		}
		return <React.Fragment />;
	});
	const skillsIndustryHeader = (
		<List.Item>
			<List.Header>Industry Knowledge</List.Header>
		</List.Item>
	);

	return (
		<div className='container-fluid skills-container' id='skills'>
			<div className='container'>
				<div className='row pt-5 pb-5'>
					<div className='col-12'>
						<h1 className='skills-title'>Skills</h1>
						<p>
							<i>
								"Man often becomes what he believes himself to be." -{' '}
								<strong>Mahatma Gandhi</strong>
							</i>
						</p>
					</div>
				</div>
				<Segment>
					<Grid columns={2} divided stackable>
						<Grid.Column>
							<List selection verticalAlign='middle'>
								{skillsLanguagesHeader}
								{skillsLanguages}
								{skillsFrontHeader}
								{skillsFront}
								{skillsBackHeader}
								{skillsBack}
							</List>
						</Grid.Column>
						<Grid.Column>
							<List selection verticalAlign='middle'>
								{skillsDataHeader}
								{skillsData}
								{skillsTestHeader}
								{skillsTest}
								{skillsIndustryHeader}
								{skillsIndustry}
							</List>
						</Grid.Column>
					</Grid>
				</Segment>
			</div>
		</div>
	);
};

export default Skills;
