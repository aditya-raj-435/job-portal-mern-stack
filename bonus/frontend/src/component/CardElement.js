import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CardElement = ({ jobTitle, description, category, location, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${id}`);
  };

  return (
    <Card sx={{ 
      minWidth: 275, 
      mb: 3, 
      mt: 3, 
      bgcolor: 'primary.light', 
      '&:hover': { 
        bgcolor: 'primary.main', 
        color: 'white' 
      },
      cursor: 'pointer'
    }} onClick={handleClick}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: 500, mb: 1 }}>
          {jobTitle}
        </Typography>
        <Typography sx={{ mb: 1.5, color: 'white' }}>
          <Box component="span" sx={{ fontWeight: 700, mr: 1 }}>Category:</Box>
          {category}
        </Typography>
        <Typography sx={{ mb: 1.5, color: 'white' }}>
          <Box component="span" sx={{ fontWeight: 700, mr: 1 }}>Location:</Box>
          {location}
        </Typography>
        <Typography sx={{ mb: 1.5, color: 'white' }}>
          <Box component="span" sx={{ fontWeight: 700, mr: 1 }}>Description:</Box>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardElement;