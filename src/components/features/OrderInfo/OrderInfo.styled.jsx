import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Order = styled.li`
    background-color: #e0e8f6;
    border-radius: 10px;
    padding: 25px;
    padding-bottom: 12px;
    border: 1px solid rgba(68, 65, 65, 0.177);
    display: flex;
    flex-direction: column;

    row-gap: 20px;

    @media screen and (min-width: 640px) {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-auto-rows: auto;
        column-gap: 25px;
    }
`;
export const DecorativeImage = styled.img`
    display: block;
`;

export const OrderSummary = styled.div`
    border-radius: 10px;
    background-color: #edf2f7;
    padding: 25px;
    border: 1px solid rgba(68, 65, 65, 0.152);

    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

export const OrderProductsDetails = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 10px;

    overflow: hidden;
    @media screen and (min-width: 640px) {
        grid-column: 1/3;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-auto-rows: auto;
        gap: 10px;
    }
`;
export const ImageWrapper = styled.div`
    display: none;

    background-color: #fff;
    overflow: hidden;

    @media screen and (min-width: 640px) {
        display: flex;
        border: 1px solid rgba(68, 65, 65, 0.177);
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 240px;
    }
`;

export const CardBox = styled.article`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 16px;
    border-radius: 10px;
    border: 1px solid #caced1a0;

    background-color: #edf2f7;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);

    @media screen and (max-width: 767.98px) {
        padding: 25px;
    }
`;

export const ImageHolder = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    background-color: white;
    border: 1px solid #e1e8ecdc;

    overflow: hidden;

    @media screen and (min-width: 1024px) {
        min-height: 240px;
        max-height: 250px;
    }
`;

export const DetailsHolder = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ProductDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductName = styled.span`
    font-size: 18px;
    font-weight: 500;
`;

export const Price = styled.span`
    font-size: 16px;
    font-weight: 500;
`;

export const Img = styled.img`
    @media screen and (min-width: 1440px) {
        max-width: 240px;
    }
`;
export const DetailName = styled.span`
    font-weight: 600;
`;
export const ShowMoreButton = styled.button`
    font-family: Roboto;
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid #989c9f87;
    border-radius: 10px;
    outline: none;
    transition: all 250ms ease;

    &:hover {
        background-color: #c4c9cd66;
        cursor: pointer;
        border-color: #777b7d30;
    }
`;
