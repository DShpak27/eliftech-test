import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../../redux/cart/slice.js";
import { changeFavoritesStatus } from "../../../redux/favorites/slice.js";
import {
    CardBox,
    ImageHolder,
    ProductDetails,
    AddToCartButton,
    DetailsHolder,
    Price,
    ProductName,
    AddIcon,
    FavoritesIconWrapper,
    FavoriteIcon,
    NonFavoriteIcon,
} from "./ProductCard.styled.jsx";

export default function ProductCard({ product }) {
    const { id, name, imageUrl, price, isInFavorites } = product;
    const {
        state: { storeId, store },
    } = useLocation();
    const dispatch = useDispatch();

    return (
        <CardBox>
            <ImageHolder>
                <img src={imageUrl} alt={name} />
                <FavoritesIconWrapper onClick={() => dispatch(changeFavoritesStatus({ id, name }))}>
                    {isInFavorites ? <FavoriteIcon /> : <NonFavoriteIcon />}
                </FavoritesIconWrapper>
            </ImageHolder>
            <DetailsHolder>
                <ProductDetails>
                    <ProductName>{name}</ProductName>
                    <Price>{price} ₴</Price>
                </ProductDetails>
                <AddToCartButton
                    onClick={() => {
                        dispatch(
                            addToCart({
                                id,
                                name,
                                price,
                                quantity: 1,
                                imageUrl,
                                storeId,
                                store,
                            })
                        );
                        toast.success(`"${name}" added to cart.`);
                    }}
                >
                    Add to cart <AddIcon />
                </AddToCartButton>
            </DetailsHolder>
        </CardBox>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        isInFavorites: PropTypes.boolean.isRequired,
        storeId: PropTypes.string.isRequired,
        store: PropTypes.string.isRequired,
    }).isRequired,
};
