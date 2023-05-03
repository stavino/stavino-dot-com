import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {Brightness4, Brightness7} from '@mui/icons-material'

function AppTopBar(props) {

  

return (
  <Box sx={{flexGrow: 1}}>
    <AppBar sx={{backgroundColor: 'transparent', boxShadow: 'none', alignItems: 'flex-end'}} position='static'>
      <Toolbar>
        <Button 
          sx={{}} 
          size="large" 
          color="inherit"   
          onClick={() => {props.setDarkMode(!props.darkMode); localStorage.setItem("DARK_MODE", !props.darkMode)}} >
          {props.theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </Button>
        <IconButton href='https://github.com/stavino'><GitHubIcon/></IconButton>
        <IconButton href="https://www.linkedin.com/in/stephen-avino-a3b3b8227/"><LinkedInIcon/></IconButton>
        <IconButton href='mailto:stephen.avino@gmail.com?subject=Hi_Stephen'><EmailIcon/></IconButton>

      </Toolbar>
    </AppBar>
  </Box>
)};

export default AppTopBar;
