import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WorkIcon from '@mui/icons-material/Work';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction';
import { DarkMode, LightMode } from "@mui/icons-material";
import { toggleActionTheme } from '../redux/actions/themeAction';
import { keyframes } from '@mui/material/styles';

const pages = ['Home', 'Log In'];

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Navbar = () => {
    //show / hide button
    const { userInfo } = useSelector(state => state.signIn);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { palette } = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // log out user
    const logOutUser = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }



    return (
        <AppBar position="static" sx={{ bgcolor: palette.primary.main }}>
            <Container >
                {/* principal Menu */}
                <Toolbar disableGutters>
                    <WorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: '1.5rem',
                            letterSpacing: '1px',
                            color: 'inherit',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            animation: `${slideDown} 0.5s ease-out`,
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }
                        }}
                    >
                        CAREER BRIDGE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <WorkIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 600,
                            fontSize: '1.2rem',
                            letterSpacing: '1px',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        CAREER BRIDGE
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* menu desktop */}
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ 
                                my: 2,
                                color: 'white',
                                display: 'block',
                                fontFamily: "'Poppins', sans-serif",
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 500,
                                px: 2,
                                animation: `${fadeIn} 0.5s ease-out`,
                                animationDelay: '0.2s',
                                opacity: 0,
                                animationFillMode: 'forwards',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <Link to="/" style={{ 
                                color: 'white', 
                                textDecoration: "none",
                                fontFamily: "'Poppins', sans-serif"
                            }}>
                                Home
                            </Link>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ 
                                my: 2,
                                color: 'white',
                                display: 'block',
                                fontFamily: "'Poppins', sans-serif",
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontWeight: 500,
                                px: 2,
                                animation: `${fadeIn} 0.5s ease-out`,
                                animationDelay: '0.4s',
                                opacity: 0,
                                animationFillMode: 'forwards',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <Link to="/register" style={{ 
                                color: 'white', 
                                textDecoration: "none",
                                fontFamily: "'Poppins', sans-serif"
                            }}>
                                Register
                            </Link>
                        </Button>
                    </Box>
                    <IconButton sx={{ mr: 4 }} onClick={() => dispatch(toggleActionTheme())}>
                        {palette.mode === "dark" ? (
                            <DarkMode sx={{ color: "#ffffff", fontSize: "25px" }} />
                        ) : (
                            <LightMode sx={{ color: "#ffffff", fontSize: "25px" }} />
                        )}
                    </IconButton>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ color: palette.primary.white }} alt="Remy Sharp" src="" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            PaperProps={{
                                sx: {
                                    "& 	.MuiMenu-list": {
                                        bgcolor: "primary.white",
                                        color: "white"
                                    },
                                }
                            }}

                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            {userInfo && (
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <Link 
                                            style={{ textDecoration: "none", color: palette.secondary.main }} 
                                            to={userInfo.role === 1 ? "/admin/dashboard" : "/user/dashboard"}
                                        >
                                            {userInfo.role === 1 ? "Admin Dashboard" : "Dashboard"}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            )}

                            {
                                !userInfo ?
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">
                                            <Link style={{ textDecoration: "none", color: palette.secondary.main }} to="/login">
                                                Log In
                                            </Link>
                                        </Typography>
                                    </MenuItem> :
                                    <MenuItem onClick={logOutUser}>
                                        <Typography style={{ textDecoration: "none", color: palette.secondary.main }} textAlign="center">
                                            Log Out
                                        </Typography>
                                    </MenuItem>
                            }

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
