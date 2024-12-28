import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { useState } from "react";
import axios from "axios";

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px',
    }
}));

const Image = styled('img')({
    width: '95%',
    padding: '15px'
});

const StyledBtn = styled(Button)(({ theme }) => ({
    width: '48%',
    height: 50,
    bordeRradius: 5,
    [theme.breakpoints.down('lg')]: {
        width: '46%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%',
    }
}));

function ActionItem({ product }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.user);
    const [qty, setQty] = useState(1);
    const { id } = product;

    console.log("Product Props", product.price.cost + 40);

    function addItem() {
        dispatch(addToCart(id, qty));
        navigate("/cart")
    }

    let data = {
        name: userData.userName,
        amount: product.price.cost + 40,
        mobileNo: userData.phoneNo,
        MID: 'MID' + Date.now(),
        transactionId: 'T' + Date.now()
    }
    console.log("Data", data);

    async function handleBuyNow() {
        try {

            await axios.post('http://localhost:8000/payment', data).then(res => {
                console.log("Payment Response:", res.data);
                if (res.data.success === true) {
                    window.location.href = res.data.data.instrumentResponse.redirectInfo.url
                }
            }).catch(err => {
                console.log("Error: Payment unsuccessful", err);
            })

        } catch (error) {
            console.log("Error during payment:", error);
        }
    };

    return (
        <>
            <LeftContainer>
                <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
                    <Image src={product.detailUrl} alt={product.name} />
                </Box>
                <StyledBtn variant="contained" style={{ marginRight: 10, background: '#ff9f00' }} onClick={addItem}><Cart />Add To Cart</StyledBtn>
                <StyledBtn variant="contained" onClick={handleBuyNow} style={{ background: '#fb541b' }}><Flash />Buy Now</StyledBtn>
            </LeftContainer>
        </>
    )
};

export default ActionItem;