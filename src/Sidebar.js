// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/" onClick={onClose}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/products" onClick={onClose}>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={onClose}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/help" onClick={onClose}>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
