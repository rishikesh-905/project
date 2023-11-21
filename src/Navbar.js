// Navbar.js
import React, { useState } from 'react';
import { styled, alpha } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(90deg, ${alpha('#4CAF50', 0.8)}, ${alpha('#8BC34A', 0.8)})`,
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme?.shape?.borderRadius || 4,
  backgroundColor: alpha(theme?.palette?.common?.white || '#fff', 0.2),
  '&:hover': {
    backgroundColor: alpha(theme?.palette?.common?.white || '#fff', 0.3),
  },
  width: '100%',
  [theme?.breakpoints?.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme?.spacing?.(0, 2) || 8,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000', // Black text color
}));

const StyledInputBase = styled('input')(({ theme }) => ({
  color: '#000', // Black text color
  border: 'none',
  padding: theme?.spacing?.(1, 1, 1, 0) || 8,
  paddingLeft: `calc(1em + ${theme?.spacing?.(4) || 16})`,
  width: '100%',
  [theme?.breakpoints?.up('sm')]: {
    width: theme?.spacing?.(12) || 48,
    '&:focus': {
      width: theme?.spacing?.(20) || 80,
    },
  },
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  marginLeft: theme?.spacing?.(2) || 8,
}));

const Navbar = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    // Perform logout logic if needed
    // Redirect to the register form
    navigate('/register');
  };

  const handleSidebarItemClick = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AGR GARDENS 🌿
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              aria-label="search"
            />
          </Search>
          <LogoutButton color="inherit" onClick={handleLogout}>
            Logout
          </LogoutButton>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
        <List>
          <ListItem button onClick={() => handleSidebarItemClick('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
          <ListItem button onClick={() => handleSidebarItemClick('/products')}>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button onClick={() => handleSidebarItemClick('/about')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => handleSidebarItemClick('/help')}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
