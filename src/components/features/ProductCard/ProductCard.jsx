import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/slice.js';
import { changeFavoritesStatus } from '../../../redux/favorites/slice.js';
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
  Img,
} from './ProductCard.styled.jsx';

export default function ProductCard({ product, storeName }) {
  const { id, name, imageUrl, price, isInFavorites, storeId } = product;
  const dispatch = useDispatch();

  return (
    <CardBox>
      <ImageHolder>
        <Img src={imageUrl} alt={name} loading="lazy" />
        <FavoritesIconWrapper
          onClick={() => dispatch(changeFavoritesStatus({ id, name }))}
        >
          {isInFavorites ? (
            <FavoriteIcon />
          ) : (
            <NonFavoriteIcon style={{ opacity: 1 }} />
          )}
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
                store: storeName,
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
  storeName: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    storeId: PropTypes.string,
    store: PropTypes.string,
    quantity: PropTypes.number,
    isInFavorites: PropTypes.bool,
  }).isRequired,
};
