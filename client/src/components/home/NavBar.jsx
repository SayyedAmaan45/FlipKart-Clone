import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: '55px 130px 0 130px',
    justifyContent: 'space-between',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: 0
    }
}));

const Container = styled(Box)`
padding:12px 8px;
text-align:center;
`;

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`;

function NavBar({ showImg = true }) {
    const travellingUrl = "https://www.flipkart.com/travel/flights?param=DTNavIcon&fm=neo%2Fmerchandising&iid=M_e2139d53-7c66-406c-8897-41c2e6a1b8d6_1_372UD5BXDFYS_MC.V4ZPKTOAO321&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Flight%2BBookings_V4ZPKTOAO321&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=V4ZPKTOAO321";

    function handleClick(text, link) {
        if (text === "Travel") {
            window.location.href = travellingUrl;
        } else {
            window.location.href = link
        }
    };

    return (
        <>
            <Box style={{ background: '#fff', cursor: "pointer" }}>
                <Component>
                    {
                        navData.map((data, index) => (
                            <Container key={index}>
                                <div onClick={() => handleClick(data.text, `/products/category/${data.text}`)}
                                    style={{ textDecoration: 'none', color: "inherit" }}>
                                    {showImg && <img src={data.url} alt={data.text} style={{ width: 84 }} />}
                                    <Text>{data.text}</Text>
                                </div>
                            </Container>
                        ))
                    }
                </Component>
            </Box>
        </>
    )
}

export default NavBar;


