import React from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// Components
import { LogoSVG } from '../SVGComponents/LogoSVG';

const useStyles = makeStyles({
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
	selectedBtn: {
		textTransform: 'none',
		color: '#FFFFFF',
	},
	btnContainer: {
		padding: '0 2rem',
	},
});

export const Navbar = ({ page, setPage }) => {
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
				<Button
					className={page === 'about' ? classes.selectedBtn : classes.navBtn}
					onClick={() => setPage('about')}
				>
					About
				</Button>
				<Button
					className={
						page === 'education' ? classes.selectedBtn : classes.navBtn
					}
					onClick={() => setPage('education')}
				>
					Education
				</Button>
				<Button
					className={page === 'skills' ? classes.selectedBtn : classes.navBtn}
					onClick={() => setPage('skills')}
				>
					Skills
				</Button>
				<Button
					className={page === 'work' ? classes.selectedBtn : classes.navBtn}
					onClick={() => setPage('work')}
				>
					Work
				</Button>
				<Button
					className={page === 'projects' ? classes.selectedBtn : classes.navBtn}
					onClick={() => setPage('projects')}
				>
					Projects
				</Button>
				<Button
					className={page === 'contact' ? classes.selectedBtn : classes.navBtn}
					onClick={() => setPage('contact')}
				>
					Contact
				</Button>
			</Grid>
		</Grid>
	);
};
