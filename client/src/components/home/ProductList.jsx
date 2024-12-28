import { Box, styled, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Wrapper = styled(Box)`
  background-color: #f2f2f2;
  margin: 0 auto;
  max-width: 1680px;
  padding: 16px;
`;

const CategorySection = styled(Box)`
  background-color: #ffffff;
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Heading = styled(Typography)`
  font-size: 24px;
  font-weight: 600;
  text-align:center;
  margin-bottom: 8px;
  color: #333;
`;

const SubHeading = styled(Typography)`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
    text-align:center;
`;

const Content = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;

function ProductList() {
    const {category} =useParams();
    const { products } = useSelector(state => state.getProducts);

    const filteredProducts = products.filter(product => product.categories.includes(category));

    return (
        <>
            <NavBar showImg={false} />
            <Wrapper>
                <CategorySection>
                    <Heading>{category}</Heading>
                    <SubHeading>{filteredProducts.length} Items</SubHeading>
                    <Content>
                        {filteredProducts.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </Content>
                </CategorySection>
            </Wrapper>

        </>
    )
};

export default ProductList;
