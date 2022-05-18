import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
// Components
import { BrennoSVG } from '../SVGComponents/BrennoSVG';
import { LandingBlob } from '../SVGComponents/LandingBlob';
import { SkillsSVG } from '../SVGComponents/SkillsSVG';
import { WorkSVG } from '../SVGComponents/WorkSVG';
import { ContactSVG } from '../SVGComponents/ContactSVG';
import { ProjectsSVG } from '../SVGComponents/ProjectsSVG';
import { EducationSVG } from '../SVGComponents/EducationSVG';
import { AboutSVG } from '../SVGComponents/AboutSVG';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
// gsap
import gsap from 'gsap';

export const Landing = ({ page, setPage }) => {
	const useStyles = makeStyles((theme) => ({
		svgContainer: {
			height: '50vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			paddingBottom: '2rem',
		},
		title: {
			fontWeight: '700',
			fontSize: '1.6rem',
			color: '#B3ADDA',
		},
		subtitle: {
			fontWeight: '700',
			fontSize: '1.2rem',
			color: '#B3ADDA',
		},
		name: {
			fontSize: '3rem',
			color: '#FFAD0E',
			background: 'transparent',
		},
		nameContainer: {
			position: 'relative',
			height: 'calc(50vh - 50px)',
			display: 'flex',
			alignItems: 'flex-end',
			justifyContent: 'center',
		},
		backgroundBlob: {
			position: 'fixed',
			height: '80vh',
			bottom: 10,
			left: '50%',
			transform: 'translateX(-50%)',
		},
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
		backBtn: {
			position: 'absolute',
			top: '10%',
			left: '0',
			opacity: 0,
			textTransform: 'none',
			color: '#B3ADDA',
			'&:hover': {
				color: '#FFFFFF',
			},
		},
	}));
	const classes = useStyles();
	//////// State/Control
	const [prev, setPrev] = useState(null);
	// floating items
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
	useEffect(() => {
		if (page === 'landing') {
		} else {
			var element = document.getElementById(`span-${page}`);
			if (element) floatLeft(null, element);
		}
	}, [page]);
	//////////////////////////////////////////////////////////

	const floatLeft = (e, target) => {
		if (target) var element = target;
		else element = e.target;
		//
		element.classList.remove('floating-item');
		element.classList.add('grow-vanish');
		//
		console.log(element);
		//
		gsap.to('.floating-item', { x: '-1000%', duration: 2 });
		gsap.to('.intro', { opacity: 0 });
		gsap.to('#back-btn', { opacity: 1 });
		gsap.to('.grow-vanish', { scale: 1.5, opacity: 0, duration: 1 });
	};

	const back = () => {
		var elements = document.querySelectorAll('.float');
		var element = document.querySelector('.grow-vanish');

		if (element) {
			console.log('here');
			gsap.to('.grow-vanish', {
				x: '-1000%',
				scale: 1,
				opacity: 1,
				duration: 0,
			});
			element.classList.remove('grow-vanish');
			element.classList.add('floating-item');
		}
		gsap.to('.floating-item', { x: '0', duration: 2 });
		for (var i = 0; i < elements.length; i++) {
			if (!elements[i].classList.contains('floating-item')) {
				elements[i].classList.add('floating-item');
			}
		}
		gsap.to('.intro', { opacity: 1 });
		gsap.to('#back-btn', { opacity: 0 });
		setPrev(null);
	};

	return (
		<Container>
			{/**
			 * Floating items
			 */}
			<span
				className={clsx(classes.floatingSkill, 'floating-item')}
				onClick={floatLeft}
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
			{/**
			 *
			 */}
			<div className={classes.backgroundBlob}>
				<LandingBlob />
			</div>
			<Grid
				container
				direction='row'
				alignItems='flex-end'
				justifyContent='center'
			>
				<Grid item xs={12} className={clsx(classes.nameContainer)}>
					<Button
						onClick={back}
						// onClick={() => setPage('landing')}
						className={classes.backBtn}
						id='back-btn'
						startIcon={
							<span key='back'>
								<i className='fa-solid fa-left-long' />
							</span>
						}
					>
						BACK
					</Button>
					<div className='w-full pb-20 intro'>
						<Typography align='center' className={classes.title}>
							I AM <mark className={classes.name}>BRENNO</mark>,
						</Typography>
						<Typography align='center' className={classes.subtitle}>
							CREATIVE UI/UX DEVELOPER
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} className={classes.svgContainer}>
					<BrennoSVG />
				</Grid>
			</Grid>
		</Container>
	);
};
