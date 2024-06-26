import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFavorites } from '../../../redux/favorites/selectors.js';
import shopApi from '../../../redux/shop/api.js';
import { ShopSection } from '../../../components/common/ShopSection';
import { Title } from '../../../components/common/Title';
import { ProductList } from '../../../components/common/ProductList';
import {
  SortButtonsWrapper,
  SortDownIcon,
  SortUpIcon,
} from './CurrentShopPage.styled.jsx';
import ProductCard from '../../../components/features/ProductCard';

export default function CurrentShopPage() {
  const [isSortedDescending, setIsSortedDescending] = useState(false);
  const [isSortedAscending, setIsSortedAscending] = useState(false);

  const { shopId } = useParams();
  const favorites = useSelector(getFavorites);
  const {
    data: products,
    isSuccess,
    isError,
    error,
  } = shopApi.useGetShopPriceQuery(shopId);
  const {
    data: shops,
    isSuccess: isShopFetchSuccess,
    isError: isShopFetchError,
    error: shopFetchError,
  } = shopApi.useGetShopsQuery();

  useEffect(() => {
    if (isError) {
      toast.success(`(${error.status}) ${error.data}`);
    }
    if (isShopFetchError) {
      toast.success(`(${shopFetchError.status}) ${shopFetchError.data}`);
    }
  }, [isError, error, isShopFetchError, shopFetchError]);

  const makeProductsWithFavoriteStatus = () => {
    if (!favorites.length) {
      return products.map(product => ({
        ...product,
        isInFavorites: false,
      }));
    }

    return products.map(product => ({
      ...product,
      isInFavorites: favorites.some(favorite => favorite.id === product.id),
    }));
  };

  const computeProductsToView = () => {
    const compare = (a, b) => {
      if (b.isInFavorites - a.isInFavorites !== 0) {
        return b.isInFavorites - a.isInFavorites;
      }
      return isSortedAscending ? a.price - b.price : b.price - a.price;
    };
    if (isSortedAscending || isSortedDescending) {
      return [...makeProductsWithFavoriteStatus()].sort(compare);
    }
    return makeProductsWithFavoriteStatus();
  };

  const manageProductSorting = e => {
    const action = e.target.dataset.action;

    setIsSortedAscending(action === 'sortUp' && !isSortedAscending);
    setIsSortedDescending(action === 'sortDown' && !isSortedDescending);
  };

  const storeData = shops.find(shop => shop.id === shopId);

  return (
    <>
      {isSuccess && isShopFetchSuccess && (
        <ShopSection>
          <Title style={{ position: 'relative' }}>
            {storeData.name} assortment:
            <SortButtonsWrapper>
              <SortUpIcon
                size={22}
                type="button"
                color={isSortedAscending ? '#db1b4e' : 'rgba(0, 0, 0, 0.7)'}
                data-action="sortUp"
                onClick={e => manageProductSorting(e)}
              ></SortUpIcon>
              <SortDownIcon
                size={22}
                type="button"
                color={isSortedDescending ? '#db1b4e' : 'rgba(0, 0, 0, 0.7)'}
                data-action="sortDown"
                onClick={e => manageProductSorting(e)}
              ></SortDownIcon>
            </SortButtonsWrapper>
          </Title>
          <ProductList>
            {computeProductsToView().map(product => (
              <ProductCard
                key={product.id}
                product={product}
                storeName={storeData.name}
                storeId={storeData.id}
              />
            ))}
          </ProductList>
        </ShopSection>
      )}
      {!isSuccess && null}
    </>
  );
}
