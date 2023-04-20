import {Paper, ThemeProvider, createTheme} from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
