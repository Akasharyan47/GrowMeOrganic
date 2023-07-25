import React, { useState, useEffect, Fragment } from "react";
import "./page1.css" 
import Error_emoji from "./pngwing.com.png";
import { Typography, Box, Grid, Link } from '@mui/material';
import Comp1 from "./Comp1"; 
import Comp2 from "./Comp2"
const Data: React.FC = () => {
  const [Data, setData] = useState("");
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setData(JSON.parse(savedFormData));
    }
  }, []);

  return ( 
    <Fragment>
      <Box sx={{ marginTop: '70px' }}> 
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: 'calc(100vh - 60px)' }}>
      
        {!Data ? (
          <Grid item xs={12} md={8} lg={6}>
            <Box  >
              <div id="notfound">
                <div className="notfound">
                  <div
                    className="notfound-404"
                    style={{ backgroundImage: `url(${Error_emoji})` , backgroundSize: 'contain' }}
                  ></div>
                  <Typography variant="h1" fontWeight="bold">
                    404
                  </Typography>
                  <Typography variant="h5">Oops! Page Not Be Found</Typography>
                  <Typography>
                    Sorry, but the page you are looking for does not exist, has been
                    removed, or is temporarily unavailable.
                  </Typography>
                  <Typography>
                         <Link href="/" style={{ fontFamily: 'Roboto, sans-serif' }}>Back to Home Page</Link>
                  </Typography>
             
                </div>
              </div>
            </Box>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Comp1 />
            <Comp2 />
          </Grid> 
         
        )}
      </Grid>
      </Box>
    </Fragment>   

  );
};

export default Data;