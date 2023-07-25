// src/components/Navbar.tsx
import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import '../AllStyle.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <div className='nav'>
      <AppBar position="static" sx={{ backgroundColor: '#166870e4' }} >
        <Toolbar sx={{ gap: '40px' }} >
          <Typography component={RouterLink} to="/" variant="h6" sx={{ flexGrow: 1, color: 'white', '&:hover': { textDecoration: 'none', color: "white" } }}>
            Developed by:  Akash Kumar Aaryan
          </Typography>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <Typography sx={{ flexGrow: 1, color: 'white', '&:hover': { borderBottom: "3px solid #72970ce3"} }}>
              Home 
            </Typography>  
          </Link>
          <Link to="/Page1" style={{ color: 'white', textDecoration: 'none',  marginRight: "30px" }}>
          <Typography sx={{ flexGrow: 1, color: 'white', '&:hover': { borderBottom: "3px solid #72970ce3"} }}>
              Page1
            </Typography>
          </Link>
        </Toolbar>

      </AppBar>

    </div>

  );
};


export default Navbar;
