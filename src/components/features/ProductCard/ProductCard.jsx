import {
    CardBox,
    ImageHolder,
    ProductDetails,
    AddToCartButton,
    DetailsHolder,
    Price,
    ProductName,
    AddIcon,
} from "./ProductCard.styled.jsx";

export default function ProductCard() {
    return (
        <CardBox>
            <ImageHolder>
                <img
                    src="https://root.tblcdn.com/img/goods/0f5f3990-9bc6-40fc-bd92-feb83c45300d/1/img_0.jpg?v=AAAAAAn3YD4"
                    alt="аспірин"
                />
            </ImageHolder>
            <DetailsHolder>
                <ProductDetails>
                    <ProductName>Aspirin</ProductName>
                    <Price>25.60 ₴</Price>
                </ProductDetails>
                <AddToCartButton>
                    Add to cart <AddIcon />
                </AddToCartButton>
            </DetailsHolder>
        </CardBox>
    );
}
