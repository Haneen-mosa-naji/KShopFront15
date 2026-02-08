  import React from 'react'
  import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MenuIcon from '@mui/icons-material/Menu';
import  Link  from '@mui/material/Link';

import { Link as RouterLink } from "react-router-dom";
  export default function Navbar() {
 return (
    <Box sx={{ flexGrow: 1 , }}>
      <AppBar position="static"  sx={{ backgroundColor: 'black' }}>
        <Toolbar>
         
          <Typography  variant="h6" sx={{width: '30%', fontSize: '22px', fontWeight: 'bold' }}>
            TechShed
          </Typography>
           <Box sx={{ display:{xs:'none',sm:'flex'}, fontSize: '16px' ,fontWeight: 'bold', gap:5, alignItems:'center',width: '50%',justifyContent: "center"}}>
          <Link  component={RouterLink} to={'/'} color="inherit"  underline="none">Home</Link>
           <Link  component={RouterLink} to={'/about'} color="inherit"  underline="none">About</Link>
            <Link  component={RouterLink} to={'/contact'} color="inherit"  underline="none">Contact</Link>
        <Link  component={RouterLink} to={'/products'} color="inherit"  underline="none">Products</Link>
          </Box>
           <Box sx={{ display:{xs:'none',sm:'flex'}, fontSize: '16px'  ,fontWeight: 'bold', gap:3, alignItems:'center' ,width: '40%',justifyContent: "end",}}>
           
             <Link  component={RouterLink} to={'/login'} color="inherit" underline="none" sx={{ display: 'flex'  ,gap:1}}>Login<AccountCircleIcon /></Link>
             <Link  component={RouterLink} to={'/register'} color="inherit" underline="none" sx={{ display: 'flex' ,gap:1 }}>Register<HowToRegTwoToneIcon/></Link>
          <Link  component={RouterLink} to={'/wishlist'} color="inherit"  underline="none"sx={{ display: 'flex' ,gap:1 }}>Wishlist<FavoriteBorderTwoToneIcon/></Link>
           <Link  component={RouterLink} to={'/cart'} color="inherit" underline="none" sx={{ display: 'flex' ,gap:1 }}>Cart<AddShoppingCartTwoToneIcon/></Link>
            
           
          </Box>
            <IconButton  sx={{ display:{xs:'flex',sm:'none'}  , gap:5, alignItems:'center' }} color="inherit">
          < MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  ); 
  }
  