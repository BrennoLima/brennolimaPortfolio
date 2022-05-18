import React, { useEffect } from 'react';
import clsx from 'clsx';
import gsap from 'gsap';
// Components
import { SkillsSVG } from '../SVGComponents/SkillsSVG';
import { WorkSVG } from '../SVGComponents/WorkSVG';
import { ContactSVG } from '../SVGComponents/ContactSVG';
import { ProjectsSVG } from '../SVGComponents/ProjectsSVG';
import { EducationSVG } from '../SVGComponents/EducationSVG';
import { AboutSVG } from '../SVGComponents/AboutSVG';
// Material UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	floatingSkill: {
		zIndex: 100,
		position: 'absolute',
		bottom: '5%',
		left: '10%',
		cursor: 'pointer',
		borderRadius: '50%',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingWork: {
		zIndex: 100,
		position: 'absolute',
		bottom: '35%',
		left: '15%',
		cursor: 'pointer',
		borderRadius: '50%',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingContact: {
		zIndex: 100,
		position: 'absolute',
		bottom: '65%',
		left: '25%',
		cursor: 'pointer',
		borderRadius: '50%',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingProjects: {
		zIndex: 100,
		position: 'absolute',
		bottom: '60%',
		right: '25%',
		cursor: 'pointer',
		borderRadius: '50%',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingEducation: {
		zIndex: 100,
		position: 'absolute',
		bottom: '35%',
		right: '15%',
		cursor: 'pointer',
		borderRadius: '50%',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingAbout: {
		zIndex: 100,
		position: 'absolute',
		bottom: '5%',
		right: '15%',
		cursor: 'pointer',
		borderRadius: '50%',
		'&:hover': {
			background: '#0000001a',
		},
	},
}));

export const FloatingMenu = ({ setPage }) => {
	const classes = useStyles();
	useEffect(() => {
		gsap
			.timeline({
				defaults: { duration: 3, ease: 'linear' },
			})
			.fromTo(
				'.floating-item',
				{ y: '-5%' },
				{ y: '5%', repeat: -1, yoyo: true, stagger: 0.2 }
			);
	}, []);

	return (
		<div>
			<span
				className={clsx(classes.floatingSkill, 'floating-item')}
				onClick={() => setPage('skills')}
				id='span-skills'
			>
				<SkillsSVG />
			</span>
			<span
				className={clsx(classes.floatingWork, 'floating-item float')}
				onClick={() => setPage('work')}
				id='span-work'
			>
				<WorkSVG />
			</span>
			<span
				className={clsx(classes.floatingContact, 'floating-item float')}
				onClick={() => setPage('contact')}
				id='span-contact'
			>
				<ContactSVG />
			</span>
			<span
				className={clsx(classes.floatingProjects, 'floating-item float')}
				onClick={() => setPage('projects')}
				id='span-projects'
			>
				<ProjectsSVG />
			</span>
			<span
				className={clsx(classes.floatingEducation, 'floating-item float')}
				onClick={() => setPage('education')}
				id='span-education'
			>
				<EducationSVG />
			</span>
			<span
				className={clsx(classes.floatingAbout, 'floating-item float')}
				onClick={() => setPage('about')}
				id='span-about'
			>
				<AboutSVG />
			</span>
		</div>
	);
};
