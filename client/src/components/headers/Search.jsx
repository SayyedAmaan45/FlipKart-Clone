import { InputBase, Box, styled, ListItem, List } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/productActions"
import { Link } from "react-router-dom";

const SearchBar = styled(Box)`
background:#fff;
width:40%;
border-radius: 20px 0 ;
margin-left: 10px;
display:flex
`;

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px
display:flex
`;

const ListWrapper = styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-top:36px;

`

function Search() {
    let dispatch = useDispatch();
    const [text, setText] = useState('');
    const { products } = useSelector(state => state.getProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    function handleChange(text) {
        setText(text)
    }
    return (
        <>
            <SearchBar>
                <InputSearchBase
                    placeholder="Search For Products, Brands And More!!"
                    onChange={(e) => handleChange(e.target.value)}
                    value={text}
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{ textDecoration: "none", color: "inherit" }}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
                }
            </SearchBar>
        </>
    )

}

export default Search;