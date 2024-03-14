import React from 'react';
// Components
import { TorontoSVG } from '../SVGComponents/TorontoSVG';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: '700',
		fontSize: '2rem',
		color: '#B3ADDA',
		letterSpacing: '0.2rem',
	},
}));

export const About = () => {
	const classes = useStyles();
	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 0,
				left: 0,
			}}
		>
			<Typography className={classes.title}>ABOUT ME</Typography>
			<TorontoSVG />
		</Box>
	);
};
