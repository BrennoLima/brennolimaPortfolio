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

const useStyles = makeStyles(() => ({
	floatingSkill: {
		height: '20vh',
		zIndex: 100,
		position: 'absolute',
		bottom: '5%',
		left: 0,
		cursor: 'pointer',
		borderRadius: '50%',
		transition: 'background 0.25s linear',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingWork: {
		height: '20vh',
		zIndex: 100,
		position: 'absolute',
		bottom: '40%',
		left: '2%',
		cursor: 'pointer',
		borderRadius: '50%',
		transition: 'background 0.25s linear',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingContact: {
		height: '15vh',
		zIndex: 100,
		position: 'absolute',
		top: '10%',
		left: '20%',
		cursor: 'pointer',
		borderRadius: '50%',
		transition: 'background 0.25s linear',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingProjects: {
		height: '20vh',
		zIndex: 100,
		position: 'absolute',
		top: '5%',
		right: '20%',
		cursor: 'pointer',
		borderRadius: '50%',
		transition: 'background 0.25s linear',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingEducation: {
		height: '20vh',
		zIndex: 100,
		position: 'absolute',
		bottom: '40%',
		right: '2%',
		cursor: 'pointer',
		borderRadius: '50%',
		transition: 'background 0.25s linear',
		'&:hover': {
			background: '#0000001a',
		},
	},
	floatingAbout: {
		height: '20vh',
		zIndex: 100,
		position: 'absolute',
		bottom: '5%',
		right: '0',
		cursor: 'pointer',
		borderRadius: '50%',
		transition: 'background 0.25s linear',
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
				{ y: '5%', repeat: -1, yoyo: true, stagger: 0.3 }
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
				className={clsx(classes.floatingWork, 'floating-item')}
				onClick={() => setPage('work')}
				id='span-work'
			>
				<WorkSVG />
			</span>
			<span
				className={clsx(classes.floatingContact, 'floating-item')}
				onClick={() => setPage('contact')}
				id='span-contact'
			>
				<ContactSVG />
			</span>
			<span
				className={clsx(classes.floatingProjects, 'floating-item')}
				onClick={() => setPage('projects')}
				id='span-projects'
			>
				<ProjectsSVG />
			</span>
			<span
				className={clsx(classes.floatingEducation, 'floating-item')}
				onClick={() => setPage('education')}
				id='span-education'
			>
				<EducationSVG />
			</span>
			<span
				className={clsx(classes.floatingAbout, 'floating-item')}
				onClick={() => setPage('about')}
				id='span-about'
			>
				<AboutSVG />
			</span>
		</div>
	);
};
