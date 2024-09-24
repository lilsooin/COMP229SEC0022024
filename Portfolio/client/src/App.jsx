import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'

/**
 * Filename: App.jsx
 * Student’s Name: Suin Lee 
 * StudentID: 301369995
 * Date: 2024-09-24
 */
const App = () => {
  return (
    <Router>

      <MainRouter />

    </Router>
  );
};
export default App;
