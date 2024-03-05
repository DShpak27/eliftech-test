import { ShopSection } from "../../../components/common/ShopSection";
import { Title } from "../../../components/common/Title";
import { ProductList } from "../../../components/common/ProductList";
import ProductCard from "../../../components/features/ProductCard";
import shopApi from "../../../redux/shop/api.js";
import { useParams } from "react-router-dom";

export default function CurrentShopPage() {
    const { shopId } = useParams();
    console.log(shopId);
    const { data: products } = shopApi.useGetShopPriceQuery(shopId);

    //  {
    //     "id": "1",
    //     "name": "Aspirin",
    //     "imageUrl": "https://i.imgur.com/gsQJDDa.jpg",
    //     "price": 55.99
    // },

    return (
        <>
            {products && (
                <ShopSection>
                    <Title>Mister-Blister assortment:</Title>
                    <ProductList>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductList>
                </ShopSection>
            )}
            {!products && null}
        </>
    );
}
