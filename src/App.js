import React from 'react';
// Components
import { Navbar } from './components/Navbar/Navbar';
import { Landing } from './components/Profile/Landing';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';

const App = () => {
	const useStyles = makeStyles((theme) => ({
		app: {
			background: 'radial-gradient(#5B5387, #413876)',
		},
	}));
	const classes = useStyles();

	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justify='center'
			className={classes.app}
		>
			<Grid item xs={12}>
				<Navbar />
			</Grid>
			<Grid item xs={12}>
				<Landing />
			</Grid>
		</Grid>
	);
};

export default App;
