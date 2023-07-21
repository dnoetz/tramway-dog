import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
// import Logo from './Logo'

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    

    return (
        <AppBar position="fixed">
            <Toolbar disableGutters sx={{backgroundColor: 'black', height: "10vh", display: "flex"}}>

                <Box sx={{
                    flexGrow: 1,
                    display: {xs: 'flex', lg: 'none'},
                    justifyContent: 'flex-start',
                    m: 2,
                }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx={{color: "white"}}
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
                            display: { xs: 'block', lg: 'none' },
                        }}
                        >
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link
                                href="/"
                                sx={{
                                textDecoration: 'none',
                                color: 'black',
                                fontFamily: 'londrina solid',
                                }}
                            >
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link
                                href="/about"
                                sx={{
                                textDecoration: 'none',
                                color: 'black',
                                fontFamily: 'londrina solid',
                                }}
                            >
                                About Us
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link
                                href="/services-products"
                                sx={{
                                textDecoration: 'none',
                                color: 'black',
                                fontFamily: 'londrina solid',
                                }}
                            >
                                Services & Products
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link
                                href="/prices"
                                sx={{
                                textDecoration: 'none',
                                color: 'black',
                                fontFamily: 'londrina solid',
                                }}
                            >
                                Prices
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Link
                                href="/testimonials"
                                sx={{
                                textDecoration: 'none',
                                color: 'black',
                                fontFamily: 'londrina solid',
                                }}
                            >
                                Testimonials
                            </Link>
                        </MenuItem>
                    </Menu>
                </Box>
                
                <Box 
                    id="nav-link-container"
                    sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', lg: 'flex' }, 
                        justifyContent: 'flex-start',
                        m: 3,
                        gap: 3,
                        fontSize: "1.5rem" 
                    }}
                >
                    <Link
                        href="/"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'londrina solid',
                        }}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'londrina solid',
                        }}
                    >
                        About Us
                    </Link>

                    <Link
                        href="/services-products"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'londrina solid',
                        }}
                    >
                        Services & Products
                    </Link>

                    <Link
                        href="/prices"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'londrina solid',
                        }}
                    >
                        Prices
                    </Link>

                    <Link
                        href="/testimonials"
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            fontFamily: 'londrina solid',
                        }}
                    >
                        Testimonials
                    </Link>
                </Box>
                
                {/* <img id="nav-logo" src="https://i.imgur.com/8fFr8Ls.png" /> */}

                {/* <Logo color="inherit" fontSize="large" /> */}

                <Typography
                    variant="h6"
                    
                    component="a"
                    href="/"
                    sx={{
                        margin: "10px",
                        ml: 3,
                        mr: 3,
                        display: {xs: 'none', md: 'flex'},
                        fontFamily: 'Aoboshi One',
                        // fontWeight: 'bold',
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '2rem',
                    }}
                >
                    Tramway Dog Grooming
                </Typography>

                <Typography
                    variant="h5"
                    
                    component="a"
                    href="/"
                    sx={{
                        m: 2,
                        p: 2,
                        display: {xs: 'flex', md: 'none'},
                        flexGrow: 1,
                        fontFamily: 'Aoboshi One',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                    }}
                >
                    Tramway Dog Grooming
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;