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
		height: '50px',
		boxShadow: '1px 2px 3px rgba(0,0,0,0.3)',
		background: '#FFFFFF0D',
	},
	logo: {
		padding: '0 1rem',
	},
	navBtn: {},
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
			<Grid item>
				<Button className={classes.navBtn}>About</Button>
			</Grid>
		</Grid>
	);
};
