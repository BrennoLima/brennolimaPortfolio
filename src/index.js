import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Mui
import { StyledEngineProvider } from '@mui/material';

ReactDOM.render(
	<StyledEngineProvider injectFirst>
		<App />
	</StyledEngineProvider>,
	document.getElementById('root')
);
registerServiceWorker();
