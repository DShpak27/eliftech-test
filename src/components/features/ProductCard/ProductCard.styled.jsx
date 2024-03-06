import styled from "@emotion/styled";
import { LiaCartPlusSolid as Icon } from "react-icons/lia";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

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

export const AddIcon = styled(Icon)`
    font-size: 22px;
`;

export const AddToCartButton = styled.button`
    width: 100%;

    display: flex;
    justify-content: center;
    column-gap: 6px;
    align-items: center;

    padding: 8px 16px;

    align-self: center;
    text-transform: uppercase;

    line-height: 1.2;
    font-size: 16px;
    font-weight: 500;

    background-color: #f7b31f;
    color: #fff;
    border: 1px solid #f7b31f;
    border-radius: 4px;

    cursor: pointer;
    transition: all 250ms;

    &:hover {
        background-color: #f59c02;
        border-color: #f59c02;
    }
`;

export const FavoritesIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 3px;
    right: 3px;

    position: absolute;

    &:hover {
        cursor: pointer;
    }
`;

export const FavoriteIcon = styled(MdFavorite)`
    font-size: 24px;
    color: #ff005d;
`;

export const NonFavoriteIcon = styled(MdFavoriteBorder)`
    font-size: 24px;
    color: rgba(0, 0, 0, 0.5);

    &:hover {
        color: #ff005d;
    }
`;

export const Img = styled.img`
    @media screen and (min-width: 1440px) {
        max-width: 240px;
    }
`;
