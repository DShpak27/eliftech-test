import { ShopSection } from "../../../components/common/ShopSection";
import { Title } from "../../../components/common/Title";
import { Text } from "./WelcomePage.styled.jsx";

export default function WelcomePage() {
    return (
        <ShopSection>
            <Title>Welcome to the MedMarket.ua! </Title>
            <Text>Choose your pharmacy and enjoy a personalized shopping experience.</Text>
        </ShopSection>
    );
}
