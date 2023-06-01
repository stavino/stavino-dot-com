import {Paper, ThemeProvider, createTheme} from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState('')

  const theme = createTheme({
      palette: {
      mode: darkMode ? "dark" : 'light'
    },
  })
  useEffect(() => {darkMode ? document.body.style = "background: black;" : document.body.style = `background: white;`}, [darkMode]);

  return (
   <ThemeProvider theme={theme}>
      <div className="App">
        <Header theme={theme} darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Routes>
            <Route path='/' element={<Homepage theme={theme}/>} />

          </Routes>

      </div>
    </ThemeProvider> 
  );
}

export default App;
