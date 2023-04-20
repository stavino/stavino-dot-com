import {Paper, ThemeProvider, createTheme} from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
          <Route path='/' element={<Homepage/>} />

      </Routes>

    </div>
  );
}

export default App;
