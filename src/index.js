import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import style from "./components/Styling";
import './fonts/get-schwifty.ttf';

ReactDOM.render(
    <ThemeProvider theme={style}>
        <App />
    </ThemeProvider>, 
    document.getElementById('root')
);
