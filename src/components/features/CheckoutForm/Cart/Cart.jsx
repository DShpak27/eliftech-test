import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
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
        if (Number(e.target.value) > 100) {
            dispatch(changeQuantity({ id, newQuantity: 100 }));
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
            {products.map((product) => (
                <ProductItem key={product.id}>
                    <DeleteButton
                        type="button"
                        onClick={() => {
                            dispatch(deleteItem(product.id));
                            toast.success(`"${product.name}" removed from cart.`);
                        }}
                    >
                        <DeleteIcon />
                    </DeleteButton>
                    <ImageContainer>
                        <img loading="lazy" src={product.imageUrl} alt={product.name} />
                    </ImageContainer>
                    <ProductInfo>
                        <Wrapper>
                            <ItemName>{product.name}</ItemName>
                            <PriceTag>{product.price} ₴</PriceTag>
                        </Wrapper>
                        <QuantitySelector
                            type="number"
                            value={product.quantity}
                            InputProps={{
                                inputProps: {
                                    min: 1,
                                },
                            }}
                            variant="filled"
                            onChange={(e) => onQuantityChange(e, product.id)}
                        />
                    </ProductInfo>
                </ProductItem>
            ))}
        </SelectedProducts>
    );
}

Cart.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            storeId: PropTypes.string.isRequired,
            store: PropTypes.string.isRequired,
        })
    ).isRequired,
};
