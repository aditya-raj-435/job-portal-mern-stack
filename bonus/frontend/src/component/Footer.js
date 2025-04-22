import { Box, Typography, Link } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: palette.secondary.midNightBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderTop: `1px solid ${palette.primary.main}30`
            }}>
                <Typography 
                    component="div" 
                    sx={{ 
                        color: palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}
                >
                    © 2025 Career Bridge by{' '}
                    <Link 
                        href="https://github.com/adityaraj" 
                        target="_blank"
                        sx={{ 
                            color: 'inherit',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        Aditya Raj
                    </Link>
                    . All rights reserved.
                </Typography>
            </Box>
        </>
    )
}

export default Footer