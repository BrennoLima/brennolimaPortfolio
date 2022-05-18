import React from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// Components
import { LogoSVG } from '../SVGComponents/LogoSVG';

const useStyles = makeStyles({
	brand: {
		fontSize: '1.6rem',
		fontWeight: '600',
	},
	navbar: {
		position: 'sticky',
		top: 0,
		height: '50px',
		boxShadow: '1px 2px 3px rgba(0,0,0,0.3)',
		background: '#FFFFFF0D',
	},
	logo: {
		padding: '0 2rem',
	},
	navBtn: {
		textTransform: 'none',
		color: '#B3ADDA',
		'&:hover': {
			color: '#FFFFFF',
		},
	},
	btnContainer: {
		padding: '0 2rem',
	},
});

export const Navbar = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justify='space-between'
			className={classes.navbar}
		>
			<Grid item className={classes.logo}>
				<LogoSVG />
			</Grid>
			<Grid item className={classes.btnContainer}>
				<Button className={classes.navBtn}>About</Button>
				<Button className={classes.navBtn}>Education</Button>
				<Button className={classes.navBtn}>Skills</Button>
				<Button className={classes.navBtn}>Work</Button>
				<Button className={classes.navBtn}>Projects</Button>
				<Button className={classes.navBtn}>Contact</Button>
			</Grid>
		</Grid>
	);
};
