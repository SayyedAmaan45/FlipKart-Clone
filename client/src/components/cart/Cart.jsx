import { Box, Grid, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalAmount from "./TotalAmount";
import EmptyCart from "./EmptyCart";
import axios from "axios";

const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 0',
    }
}));


const Header = styled(Box)`
padding :15px 24px;
background:#fff;
`;

const BtnWrapper = styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top: 1px solid #f0f0f0;
`;

const StyledBtn = styled(Button)`
display:flex;
margin-left:auto;
background:#fb641b;
color:#fff;
width:250px;
height:50px;
border-radius:5px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));

function Cart() {
    const { cartItems } = useSelector(state => state.cart);
    const { userData } = useSelector(state => state.user);

    let data = {
        name: userData.userName,
        amount: cartItems.length ? cartItems.reduce((total, item) => total + (item.price?.cost || 0), 0) + 40 : 0, 
        mobileNo: userData.phoneNo,
        MID: 'MID' + Date.now(),
        transactionId: 'T' + Date.now()
    }

    async function handleBuyNow() {
        try {

            await axios.post('http://localhost:8000/payment', data).then(res => {
                console.log("Payment Response:", res.data);
                if (res.data.success === true) {
                    window.location.href = res.data.data.instrumentResponse.redirectInfo.url
                }
            }).catch(err => {
                console.log("Error: Payment unsuccessful",err);
            })

        } catch (error) {
            console.log("Error during payment:", error);
        }
    };

    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} />
                                ))
                            }
                            <BtnWrapper>
                                <StyledBtn onClick={handleBuyNow}>Place Order</StyledBtn>
                            </BtnWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalAmount cartItems={cartItems} />
                        </Grid>
                    </Container>
                    : <EmptyCart />
            }
        </>
    )
}

export default Cart;