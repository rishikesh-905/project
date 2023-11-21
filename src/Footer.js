// Footer.js
import React from 'react';
import { styled, alpha } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const StyledFooter = styled(AppBar)(({ theme }) => ({
  top: 'auto',
  bottom: 0,
  background: `linear-gradient(90deg, ${alpha('#4CAF50', 0.8)}, ${alpha('#8BC34A', 0.8)})`,
  boxShadow: '0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
}));

const Footer = () => {
  const handleYouTubeSearch = () => {
    // Handle YouTube search logic
    console.log('Perform YouTube search');
  };

  return (
    <StyledFooter position="fixed">
      <Toolbar>
        <IconButton size="large" color="inherit" onClick={handleYouTubeSearch}>
          <YouTubeIcon />
        </IconButton>
        <IconButton size="large" color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton size="large" color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton size="large" color="inherit">
          <InstagramIcon />
        </IconButton>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          © 2023 AGR GARDENS
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase
            placeholder="Search on YouTube"
            sx={{ ml: 1, color: 'inherit' }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </StyledFooter>
  );
};

export default Footer;
