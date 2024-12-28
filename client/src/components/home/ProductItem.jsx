import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = styled(Box)`
  width: 220px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  padding: 16px;
  text-align: center; /* Center the text inside the card */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled("img")`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 12px;
`;

const ProductName = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  color: #212121;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductPriceWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  margin-top: 8px;
  gap: 4px; /* Reduced spacing between price, MRP, and discount */
`;

const ProductPrice = styled(Typography)`
  font-size: 16px;
  font-weight: 700;
  color: #212121;
`;

const ProductMRP = styled(Typography)`
  font-size: 14px;
  color: #757575;
  text-decoration: line-through;
`;

const ProductDiscount = styled(Typography)`
  font-size: 14px;
  color: #388e3c; /* Green color similar to Flipkart */
  font-weight: 600;
`;

const AddToCartButton = styled(Box)`
  width: 100%;
  background-color: #2874f0;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background-color: #0056b3;
  }
`;

function ProductItem({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
    <ProductCard>
      <ProductImage src={product.url} alt={product.title.shortTitle} />
      <ProductName>{product.title.shortTitle}</ProductName>

      <ProductPriceWrapper>
        <ProductPrice>₹{product.price.cost}</ProductPrice>
        <ProductMRP>₹{product.price.mrp}</ProductMRP>
        <ProductDiscount>{product.discount} off</ProductDiscount>
      </ProductPriceWrapper>
    </ProductCard>
    </Link>
  );
}

export default ProductItem;
