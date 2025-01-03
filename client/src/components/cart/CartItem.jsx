import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from "../../utlis/common-utlis";
import BtnGrp from "./BtnGrp";
import { removeFromCart } from "../../store/actions/cartActions"
import { useDispatch } from "react-redux";

const Component = styled(Box)`
border-top: 1px solid #f0f0f0;
display:flex;
background:#fff;

`;

const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`;

const SellerText = styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10px;
`;

const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;

`

function CartItem({ item }) {
    const dispatch = useDispatch();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    function handleRemoveFromCart(id) {
        dispatch(removeFromCart(id))

    }

    return (
        <>
            <Component>
                <LeftComponent>
                    <img src={item.url} alt="product info" style={{ height: 110, width: 110 }} />
                    <BtnGrp item={item} />
                </LeftComponent>
                <Box style={{ margin: 20 }}>
                    <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                    <SellerText>Seller:RetailNet
                        <Box component='span'>
                            <img src={fassured} alt="Flip-fassured" style={{ width: 50, marginLeft: 10 }} />
                        </Box>
                    </SellerText>
                    <Typography style={{ margin: "20px 0" }}>
                        <Box component='span' style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#388E3C' }}>{item.price.discount}</Box>&nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Remove onClick={() => handleRemoveFromCart(item.id)}>
                        Remove
                    </Remove>
                </Box>
            </Component>
        </>
    )
};

export default CartItem;