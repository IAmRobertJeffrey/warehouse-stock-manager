import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { MachineProvidor } from './contexts/MachineContext';
import { SearchProvidor } from './contexts/SearchContext';
import GlobalFonts from './style/fonts/fonts';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(

	<BrowserRouter>
		<GlobalFonts />
		<MachineProvidor>
			<SearchProvidor>
				<App />
			</SearchProvidor>
		</MachineProvidor>
	</BrowserRouter>
)



