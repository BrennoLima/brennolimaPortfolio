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
			overflow: 'hidden',
			height: '100vh',
			position: 'relative',
		},
	}));
	const classes = useStyles();
	/// state/control
	const [page, setPage] = useState('landing');
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
			<Navbar page={page} setPage={setPage} />
			<Landing page={page} setPage={setPage} />
		</div>
	);
};

export default App;
