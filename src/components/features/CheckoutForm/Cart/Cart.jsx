import {
    SelectedProducts,
    ProductItem,
    ImageContainer,
    PriceTag,
    ItemName,
    ProductInfo,
    Wrapper,
    QuantitySelector,
    DeleteButton,
    DeleteIcon,
} from "./Cart.styled.jsx";

export default function Cart() {
    return (
        <SelectedProducts>
            <ProductItem>
                <DeleteButton>
                    <DeleteIcon />
                </DeleteButton>
                <ImageContainer>
                    <img
                        src="https://root.tblcdn.com/img/goods/0f5f3990-9bc6-40fc-bd92-feb83c45300d/1/img_0.jpg?v=AAAAAAn3YD4"
                        alt="аспірин"
                    />
                </ImageContainer>
                <ProductInfo>
                    <Wrapper>
                        <ItemName>Aspirin</ItemName>
                        <PriceTag>25.60 ₴</PriceTag>
                    </Wrapper>
                    <QuantitySelector type="number" defaultValue={1} variant="filled" />
                </ProductInfo>
            </ProductItem>
        </SelectedProducts>
    );
}
