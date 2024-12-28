import { ButtonGroup, Button, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";

const Component = styled(ButtonGroup)`
margin-top:30px;
`;

const StyledBtn = styled(Button)`
border-radius:50%;
`

function BtnGrp({item}) {
    const dispatch = useDispatch();    

    function handleIncrement() {
        dispatch(addToCart(item.id, item.quantity + 1));

    }

    function handleDecrement() {
        if (item.quantity > 1) {
            dispatch(addToCart(item.id, item.quantity - 1));
        } else {
            dispatch(removeFromCart(item.id));
        }

    }


    return (
        <>
            <Component>
                <StyledBtn onClick={handleDecrement}disabled={item.quantity <= 1}>-</StyledBtn>
                <Button disabled>{item.quantity}</Button>
                <StyledBtn onClick={handleIncrement}>+</StyledBtn>
            </Component>
        </>
    )
}

export default BtnGrp;