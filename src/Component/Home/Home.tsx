// src/pages/Home.tsx
import React, { useState } from 'react';
import "../AllStyle.css"
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextField } from '@mui/material';
interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
      navigate('/Page1')
    } else {
      console.log("Json not save properly")
    }
  };

  return (
    <Box sx={{ width: '95vw', display: 'flex' , flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: '20px' , }}>
        Form
      </Typography>
      <Box  sx={{
          display: 'flex',
          flexDirection: 'column', 
          maxWidth: '400px',
          width: '100%',  
        }}>
         <form onSubmit={handleSubmit}  > 
    
        <TextField 
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined" 
          required
          fullWidth 
          size="small"
         
        />
        <TextField
          label="Phone number"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          size="small"
          type="tel"
        />
        <TextField
          label="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          size="small"
          type="email"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
      </Box>

    </Box>

  )
}


export default Home;


