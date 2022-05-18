import React, { useState, useEffect } from 'react';
// Components
import { Navbar } from './components/Navbar/Navbar';
import { Landing } from './components/Profile/Landing';
// Material UI
import { makeStyles } from '@material-ui/core/styles';

const App = () => {
	const useStyles = makeStyles((theme) => ({
		app: {
			background: 'radial-gradient(#5B5387, #413876)',
			overflow: 'auto',
			height: '100vh',
			position: 'relative',
		},
	}));
	const classes = useStyles();
	/////////
	// eslint-disable-next-line
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={classes.app}>
			<Navbar />
			<Landing />
		</div>
	);
};

export default App;
