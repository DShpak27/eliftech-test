/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cart/slice.js";
import { getCartState } from "../../../redux/cart/selectors.js";
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
import { useLocation } from "react-router-dom";

export default function ProductCard({ product }) {
    const { id, name, imageUrl, price } = product;
    const cart = useSelector(getCartState);
    console.log(cart);

    const {
        state: { storeId, store },
    } = useLocation();

    const dispatch = useDispatch();

    return (
        <CardBox>
            <ImageHolder>
                <img src={imageUrl} alt={name} />
            </ImageHolder>
            <DetailsHolder>
                <ProductDetails>
                    <ProductName>{name}</ProductName>
                    <Price>{price} ₴</Price>
                </ProductDetails>
                <AddToCartButton
                    onClick={() =>
                        dispatch(
                            addToCart({ id, name, price, quantity: 1, imageUrl, storeId, store })
                        )
                    }
                >
                    Add to cart <AddIcon />
                </AddToCartButton>
            </DetailsHolder>
        </CardBox>
    );
}
