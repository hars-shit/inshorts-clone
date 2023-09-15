import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Menu } from '@mui/icons-material';


const StyledApp = styled(AppBar)`
        background: #fff;
        height: 70px;
`;
    
const MenuIcon = styled(Menu)`
        color: #000;
`;
    
const Image = styled('img')({
        height: 55,
        margin: 'auto',
        paddingRight: 70
})
const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

  return (
    <StyledApp position='static'>
        <Toolbar>
    <MenuIcon />
    <Image src={url} alt="" />

        </Toolbar>

    </StyledApp>
  )
}

export default Header