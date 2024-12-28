import { Box, styled } from "@mui/material";
import Slide from "./Slide";


const Component = styled(Box)`
display:flex;

`

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]:{
        width: '100%',
    }
}))


const RightComponent = styled(Box)(({ theme }) => ({
    width: '17%',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    background: '#ffffff',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none !important' 
    }

}));


function MidSlide({ products, title, timer,category }) {

    const adUrl = "https://rukminim2.flixcart.com/fk-p-flap/1000/1540/image/e94f98a96fa38a7b.jpg?q=70"
    return (
        <>
            <Component>
                <LeftComponent>
                    <Slide products={products} title={title} timer={timer} category={category} />
                </LeftComponent>
                <RightComponent>
                    <img src={adUrl} alt="ad" style={{ width: 217 }} />
                </RightComponent>
            </Component>
        </>
    )
}


export default MidSlide;