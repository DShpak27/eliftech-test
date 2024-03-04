import styled from "@emotion/styled";
import { LiaCartPlusSolid as Icon } from "react-icons/lia";

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
`;
export const ImageHolder = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: white;
    border: 1px solid #e1e8ecdc;

    overflow: hidden;
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
    font-size: 16px;
`;
export const Price = styled.span`
    font-size: 16px;
    font-weight: 500;
`;
export const AddIcon = styled(Icon)`
    font-size: 22px;
`;
export const AddToCartButton = styled.button`
    width: 100%;
    align-self: center;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 6px;
    padding: 8px 16px;
    line-height: 1.2;
    font-size: 16px;
    font-weight: 500;
    background-color: #f7b31f;
    color: #fff;
    border: 1px solid #f7b31f;
    border-radius: 4px;
    cursor: pointer;
    transition: all 250ms;

    &:hover,
    &:focus {
        background-color: #f59c02;
        border-color: #f59c02;
    }

    /* @media screen and (min-width: 768px) and (max-width: 1023.98px) {
        width: 100%;
    } */
`;
