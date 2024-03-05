import { ShopSection } from "../../../components/common/ShopSection";
import { Title } from "../../../components/common/Title";
import { ProductList } from "../../../components/common/ProductList";
import ProductCard from "../../../components/features/ProductCard";

export default function MisterBlisterPage() {
    return (
        <ShopSection>
            <Title>Mister-Blister assortment:</Title>
            <ProductList>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductList>
        </ShopSection>
    );
}
