import React from 'react';
// Components
import { TorontoSVG } from '../SVGComponents/TorontoSVG';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
		<Grid container direction='row' alignItems='center' justify='center'>
			<Grid item xs={12}>
				<Typography className={classes.title}>ABOUT ME</Typography>
			</Grid>
			<Grid item xs={12}>
				<TorontoSVG />
			</Grid>
		</Grid>
	);
};
