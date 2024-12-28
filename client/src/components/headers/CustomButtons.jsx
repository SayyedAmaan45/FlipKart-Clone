import { Badge, Box, Button, Menu, MenuItem, Typography, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        fontSize: '16px',
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}));

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: "inherit",
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const LoginBtn = styled(Button)`
color:#2874f0;
background: #FFFFFF;
text-transform:none;
padding:5px 40px;
border-radius: 5px;
box-shadow:none;
font-weight:600;
height:32px
`;


function CustomButtons() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorE1] = useState(null);
    const { account, setAccount } = useContext(DataContext);
    const { cartItems } = useSelector(state => state.cart);


    const becomeSellerURL = 'https://seller.flipkart.com/sell-online?utm_source=fkwebsite&utm_medium=websitedirect';

    function handleClick() {
        setOpen(true);
    };

    function hanldeMenuOpen(e) {
        setAnchorE1(e.currentTarget);
    };

    function handleMenuClose() {
        setAnchorE1(null);
    };

    function handleBecomeSeller() {
        window.location.href = becomeSellerURL;
    }


    return (
        <Wrapper>
            {
                account ? <ProfileMenu account={account} setAccount={setAccount} /> :
                    <LoginBtn variant="contained" onClick={handleClick}>Login</LoginBtn>
            }
            <Typography onClick={handleBecomeSeller} style={{ marginTop: 3, width: 135, cursor:"pointer" }}>
                Become A Seller
            </Typography>
            <Typography style={{ marginTop: 3,cursor:"pointer" }} onClick={hanldeMenuOpen}>More</Typography>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>
                    <NotificationsIcon style={{ marginRight: 10 }} color="primary" fontSize="small" />
                    Notifications Preferences
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <LiveHelpIcon style={{ marginRight: 10 }} color="primary" fontSize="small" />
                    24x7 Customer Care
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <TrendingUpIcon style={{ marginRight: 10 }} color="primary" fontSize="small" />
                    Advertise
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <SecurityUpdateIcon style={{ marginRight: 10 }} color="primary" fontSize="small" />
                    Download App
                </MenuItem>
            </Menu>
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;
