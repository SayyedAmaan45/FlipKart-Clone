import { AppBar, Toolbar, Box, Typography, Drawer, styled, IconButton, List, ListItem } from '@mui/material';
import Search from "../headers/Search";
import CustomButtons from "../headers/CustomButtons";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyleHeader = styled(AppBar)`
    background:#2874f0;
    height:55px;
`;

const Components = styled(Link)`
   margin-left:12%;
   line-height:0;
   text-decoration:none;
   color:inherit;
`;

const SubHeading = styled(Typography)`
font-size:12px;
font-style:italic;
`;

const PlusLogo = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonsWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuBtn = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}));

function Headers() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    };

    function handleDrawerClose() {
        setOpen(false);
    };

    function list() {
        return (
            <Box style={{ width: 200 }} onClick={handleDrawerClose}>
                <List>
                    <ListItem button>
                        <CustomButtons />
                    </ListItem>
                </List>
            </Box>
        )
    };

    return (
        <StyleHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuBtn color='inherit' onClick={handleDrawerOpen}>
                    <MenuIcon />
                </MenuBtn>
                <Drawer open={open} onClose={handleDrawerClose} >
                    {
                        list()
                    }
                </Drawer>
                <Components to={'/'}>
                    <img src={logoURL} alt='Logo' style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>
                            Explore&nbsp;
                            <Box component="span" style={{ color: "#FFE500" }}>Plus</Box>
                        </SubHeading>
                        <PlusLogo src={subURL} alt="Sub-Logo" />
                    </Box>
                </Components>
                <Search />
                <CustomButtonsWrapper>
                    <CustomButtons  />
                </CustomButtonsWrapper>
            </Toolbar>
        </StyleHeader>

    )
}

export default Headers

