import { Section } from "../../../components/common/Section";
import { Title } from "../../../components/common/Title";
import { ProductList } from "../../../components/common/ProductList";
import { ProductCard } from "../../../components/common/ProductCard";

export default function MisterBlisterPage() {
    return (
        <Section>
            <Title>Mister-Blister assortment:</Title>
            <ProductList>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductList>
        </Section>
    );
}
