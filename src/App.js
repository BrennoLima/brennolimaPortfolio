import React, { useState } from 'react';
// Components
import { Navbar } from './components/Navbar/Navbar';
import { Landing } from './components/Profile/Landing';
import { Box } from '@material-ui/core';
// Material UI
import { makeStyles } from '@material-ui/core/styles';

const App = () => {
	const useStyles = makeStyles((theme) => ({
		app: {
			background: 'radial-gradient(#5B5387, #413876)',
			overflow: 'hidden',
			height: '100vh',
			position: 'relative',
		},
	}));
	const classes = useStyles();
	const [page, setPage] = useState('');

	return (
		<Box className={classes.app}>
			<Navbar page={page} setPage={setPage} />
			<Landing page={page} setPage={setPage} />
		</Box>
	);
};

export default App;
