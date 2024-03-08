import PropTypes from "prop-types";
import decorativeImage from "../../../assets/images/history-ava.avif";
import formatDateTime from "../../../helpers/format-date.js";
import {
    CardBox,
    DecorativeImage,
    DetailName,
    DetailsHolder,
    ImageHolder,
    ImageWrapper,
    Img,
    Order,
    OrderProductsDetails,
    OrderSummary,
    Price,
    ProductDetails,
    ProductName,
    ShowMoreButton,
} from "./OrderInfo.styled.jsx";
import { useState } from "react";

export default function OrderInfo({ order }) {
    const [isFieldsShown, setIsFieldsShown] = useState();

    return (
        <Order key={order._id}>
            <ImageWrapper>
                <DecorativeImage loading="lazy" src={decorativeImage} alt="pills" />
            </ImageWrapper>
            <OrderSummary>
                <li>
                    <DetailName>Order date:</DetailName> {formatDateTime(order.createdAt)}
                </li>
                <li>
                    <DetailName>Purchase amount:</DetailName> {order.totalPrice} ₴
                </li>
                <li>
                    <DetailName>Number of products:</DetailName> {order.items.length}
                </li>
                <li>
                    <DetailName>Sellers:</DetailName>{" "}
                    {[...new Set(order.items.map((item) => item.store))].join(", ")}
                </li>
                <li>
                    <ShowMoreButton onClick={() => setIsFieldsShown(!isFieldsShown)}>
                        Show more...
                    </ShowMoreButton>
                </li>
            </OrderSummary>
            <OrderProductsDetails
                animate={isFieldsShown ? "shown" : "hide"}
                variants={{
                    shown: { height: "auto" },
                    hide: { height: "0px" },
                }}
                transition={{
                    duration: 0.35,
                    ease: "linear",
                }}
            >
                {order.items.map((item) => (
                    <CardBox key={item._id}>
                        <ImageHolder>
                            <Img src={item.imageUrl} alt={item.name} loading="lazy" />
                        </ImageHolder>
                        <DetailsHolder>
                            <ProductDetails>
                                <ProductName>{item.name}</ProductName>
                                <Price>{item.price} ₴</Price>
                            </ProductDetails>
                        </DetailsHolder>
                    </CardBox>
                ))}
            </OrderProductsDetails>
        </Order>
    );
}

OrderInfo.propTypes = {
    order: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        totalPrice: PropTypes.string,
        createdAt: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
};
