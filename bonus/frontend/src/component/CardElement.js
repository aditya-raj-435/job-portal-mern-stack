import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { keyframes } from '@mui/material/styles';
import { Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardElement = ({ jobTitle, description, category, location, salary }) => {
    const { palette } = useTheme();
    return (
        <Card sx={{
            minWidth: 275,
            mb: 3,
            mt: 3,
            animation: `${fadeInUp} 0.5s ease-out`,
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
            }
        }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    mb: 1
                }}>
                    {jobTitle}
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#666', mb: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
                    {location}
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#666', mb: 2 }}>
                    <WorkIcon sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5 }} />
                    {category}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description.slice(0, 150)}...
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        ₹{salary}
                    </Typography>
                    <Button 
                        variant="contained" 
                        sx={{
                            textTransform: 'none',
                            fontFamily: "'Poppins', sans-serif",
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            }
                        }}
                    >
                        View Details
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default CardElement;