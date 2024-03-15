import React, { useEffect } from 'react';
// Components
import { BrennoSVG } from '../SVGComponents/BrennoSVG';
import { LandingBlob } from '../SVGComponents/LandingBlob';
import { About } from '../About/About';
// Material UI
import { Box, Button, Container, Typography, Stack } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
// gsap
import gsap from 'gsap';
import { FloatingMenu } from './FloatingMenu';

export const Landing = ({ page, setPage }) => {
	const useStyles = makeStyles((theme) => ({
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
	}));
	const classes = useStyles();
	//////// State/Control
	useEffect(() => {
		if (localStorage.getItem('page')) {
			setPage(localStorage.getItem('page'));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('page', page);
		if (page !== 'landing') floatLeft();
		else back();
	}, [page]);

	//////////////////////////////////////////////////////////
	const floatLeft = () => {
		gsap.to('.floating-item', { opacity: 0 });
		gsap.to('.floating-item', { x: '-1000%', duration: 2 });
		gsap.to('#intro', { opacity: 0 });
		gsap.to('#back-btn', { opacity: 1, delay: 0.5 });
		gsap.to('#new-page', { opacity: 1, delay: 0.5 });
	};

	const back = () => {
		setPage('landing');
		gsap.to('#new-page', { opacity: 0 });
		gsap.to('.floating-item', { opacity: 1, delay: 0.25 });
		gsap.to('.floating-item', { x: 0, duration: 2 });
		gsap.to('#intro', { opacity: 1, delay: 1.5 });
		gsap.to('#back-btn', { opacity: 0 });
	};

	const navbar_height = '50px';

	return (
		<Container
			maxWidth='lg'
			sx={{
				position: 'relative',
				height: `calc(100vh - ${navbar_height})`,
			}}
		>
			<FloatingMenu setPage={setPage} />
			<LandingBlob />
			<Stack
				sx={{
					height: '50vh',
					width: '100%',
					position: 'absolute',
					bottom: '10vh',
				}}
			>
				<Box id='intro'>
					<Typography align='center' className={classes.title}>
						I AM <mark className={classes.name}>BRENNO</mark>,
					</Typography>
					<Typography
						align='center'
						className={classes.subtitle}
						sx={{ mb: 4 }}
					>
						CREATIVE UI/UX DEVELOPER
					</Typography>
				</Box>
				<BrennoSVG />
			</Stack>
			<Button
				onClick={() => setPage('landing')}
				id='back-btn'
				startIcon={
					<span key='back'>
						<i className='fa-solid fa-left-long' />
					</span>
				}
				size='large'
				sx={{
					letterSpacing: '4px',
					position: 'absolute',
					top: '10%',
					left: '0',
					opacity: 0,
					textTransform: 'none',
					color: '#B3ADDA !important',
					'&:hover': {
						color: '#FFFFFF',
					},
				}}
			>
				BACK
			</Button>
			<Box
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					height: '80vh',
					width: '100%',
				}}
				id='new-page'
			>
				{page === 'about' && <About />}
			</Box>
		</Container>
	);
};
