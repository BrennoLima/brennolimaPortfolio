import React, { useEffect } from 'react';
import clsx from 'clsx';
// Components
import { BrennoSVG } from '../SVGComponents/BrennoSVG';
import { LandingBlob } from '../SVGComponents/LandingBlob';
import { About } from '../About/About';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
// gsap
import gsap from 'gsap';
import { FloatingMenu } from './FloatingMenu';

export const Landing = ({ page, setPage }) => {
	const useStyles = makeStyles((theme) => ({
		svgContainer: {
			position: 'fixed',
			bottom: 0,
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
	useEffect(() => {
		if (page !== 'landing') floatLeft();
		else back();
	}, [page]);
	//////////////////////////////////////////////////////////

	const floatLeft = () => {
		gsap.to('.floating-item', { x: '-1000%', duration: 2 });
		gsap.to('.intro', { opacity: 0, display: 'none' });
		gsap.to('#back-btn', { opacity: 1 });
	};

	const back = () => {
		setPage('landing');
		gsap.to('.floating-item', { x: '0', duration: 2 });
		gsap.fromTo(
			'.intro',
			{ opacity: 0 },
			{ opacity: 1, display: 'block', duration: 2 }
		);
		gsap.to('#back-btn', { opacity: 0 });
	};
	return (
		<Container>
			{/**
			 * Floating items
			 */}
			<FloatingMenu setPage={setPage} />
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
						onClick={() => setPage('landing')}
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
				{page === 'about' && <About />}
			</Grid>
		</Container>
	);
};
