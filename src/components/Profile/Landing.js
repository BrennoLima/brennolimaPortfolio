import React from 'react';
// Components
import { BrennoSVG } from '../SVGComponents/BrennoSVG';
import { LandingBlob } from '../SVGComponents/LandingBlob';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const Landing = () => {
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
	}));
	const classes = useStyles();

	return (
		<Container>
			<div className={classes.backgroundBlob}>
				<LandingBlob />
			</div>
			<Grid
				container
				direction='row'
				alignItems='flex-end'
				justifyContent='center'
			>
				<Grid item xs={12} className={classes.nameContainer}>
					<div className='w-full pb-20'>
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
