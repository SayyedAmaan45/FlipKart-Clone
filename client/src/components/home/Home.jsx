import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { getProducts } from "../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


const Component = styled(Box)`
padding: 10px;
background:#F2F2F2;
`



function Home() {
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const filterProductsByCategory = (category) => {
        return products.filter(product => product.categories.includes(category));
    };    

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={filterProductsByCategory('Top Offers')} title="Unbeatable Deals Just for You!" timer={true} category="Top Offers" />
                <MidSection />
                <Slide products={filterProductsByCategory('Electronics')} title="Cutting-Edge Electronics at Discounted Prices" timer={false} category="Electronics" />
                <Slide products={filterProductsByCategory('Grocery')} title="Essential Groceries at Unmatched Prices" timer={false} category="Grocery" />
                <Slide products={filterProductsByCategory('Apple')} title="Apple's Latest Trends: Stay Ahead in Technology" timer={false} category="Apple" />
                <Slide products={filterProductsByCategory('Fashion')} title="Fashion Forward: Handpicked Styles for You" timer={false} category="Fashion" />
                <Slide products={filterProductsByCategory('Home')} title="Home Essentials: Quality Products for Your Space" timer={false} category="Home" />
                <Slide products={filterProductsByCategory('Android')} title="Upgrade Your Tech: Best of Android" timer={false} category="Android" />
                <Slide products={filterProductsByCategory('Nike')} title="Nike's Best Picks: Perfect for Your Active Lifestyle" timer={false} category="Nike" />
            </Component>
        </>
    )
    
}

export default Home;