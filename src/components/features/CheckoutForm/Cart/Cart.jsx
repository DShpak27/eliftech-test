/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteItem, changeQuantity } from "../../../../redux/cart/slice.js";
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

export default function Cart({ products }) {
    const dispatch = useDispatch();

    const onQuantityChange = (e, id) => {
        if (Number(e.target.value) < 1) {
            dispatch(changeQuantity({ id, newQuantity: 1 }));
            return;
        }
        dispatch(changeQuantity({ id, newQuantity: Number(e.target.value) }));
    };

    if (!products.length) {
        return (
            <SelectedProducts>
                <div>Cart is empty!</div>
            </SelectedProducts>
        );
    }

    return (
        <SelectedProducts>
            {products.map(({ id, name, price, quantity, imageUrl }) => (
                <ProductItem key={id}>
                    <DeleteButton
                        type="button"
                        onClick={() => {
                            console.log(id);
                            dispatch(deleteItem(id));
                        }}
                    >
                        <DeleteIcon />
                    </DeleteButton>
                    <ImageContainer>
                        <img src={imageUrl} alt={name} />
                    </ImageContainer>
                    <ProductInfo>
                        <Wrapper>
                            <ItemName>{name}</ItemName>
                            <PriceTag>{price} ₴</PriceTag>
                        </Wrapper>
                        <QuantitySelector
                            type="number"
                            value={quantity}
                            InputProps={{
                                inputProps: {
                                    min: 1,
                                },
                            }}
                            variant="filled"
                            onChange={(e) => onQuantityChange(e, id)}
                        />
                    </ProductInfo>
                </ProductItem>
            ))}
        </SelectedProducts>
    );
}
