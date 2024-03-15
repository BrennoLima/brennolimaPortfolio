import React, { useEffect } from 'react';
// Components
import { TorontoSVG } from '../SVGComponents/TorontoSVG';
// Material UI
import { Box, Container, Typography } from '@mui/material';
// gsap
import gsap from 'gsap';

export const About = () => {
	useEffect(() => {
		gsap.fromTo(
			'#about-me-page',
			{ opacity: 0 },
			{ opacity: 1, duration: 1, delay: 1 }
		);
	}, []);

	return (
		<Container maxWidth='lg'>
			<Typography
				fontWeight='bold'
				sx={{
					fontSize: '2rem',
					color: '#B3ADDA',
					letterSpacing: '0.4rem',
					my: 8,
				}}
			>
				ABOUT ME
			</Typography>
			<Box sx={{ mt: 8 }}>
				<TorontoSVG height='25vh' />
			</Box>
		</Container>
	);
};
