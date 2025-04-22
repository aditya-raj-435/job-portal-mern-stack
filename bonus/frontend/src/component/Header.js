import { Box, Container, Typography, styled, keyframes } from '@mui/material'
import React from 'react'
import SearchInputEl from './SearchInputEl';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Header = () => {
    const StyleHeader = styled(Box)(({ theme }) => ({
        padding: '4rem 0',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0 0 20px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%)',
            pointerEvents: 'none'
        }
    }));

    const AnimatedTypography = styled(Typography)`
        animation: ${fadeIn} 0.8s ease-out forwards;
    `;

    const AnimatedBox = styled(Box)`
        animation: ${fadeIn} 0.8s ease-out forwards;
        animation-delay: 0.2s;
        opacity: 0;
    `;

    return (
        <StyleHeader>
            <Container maxWidth="lg">
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <AnimatedTypography variant="h3" sx={{ 
                            color: 'white',
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>
                            Bridge Your Way to Success
                        </AnimatedTypography>
                        <AnimatedTypography variant="h6" sx={{ 
                            color: 'rgba(255, 255, 255, 0.8)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Connect with opportunities that match your ambitions and skills
                        </AnimatedTypography>
                    </Box>
                    <AnimatedBox>
                        <SearchInputEl />
                    </AnimatedBox>
                </Box>
            </Container>
        </StyleHeader>
    )
}

export default Header