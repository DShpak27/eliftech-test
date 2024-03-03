import { ShopSection } from "../../../components/common/ShopSection";
import { Title } from "../../../components/common/Title";
import { ProductList } from "../../../components/common/ProductList";
import ProductCard from "../../../components/features/ProductCard";

export default function ZdravitsaPage() {
    return (
        <ShopSection>
            <Title>Zdravitsa assortment:</Title>
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
