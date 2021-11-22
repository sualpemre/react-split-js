import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { StyledEngineProvider } from '@mui/material/styles';
import Home from './pages/Home/Home';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Home />
    </StyledEngineProvider>,
  document.getElementById('root')
);

