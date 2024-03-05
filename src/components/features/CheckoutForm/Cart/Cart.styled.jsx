import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { MdDeleteForever as Icon } from "react-icons/md";

export const SelectedProducts = styled.ul`
    max-height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    row-gap: 10px;
    align-content: start;

    padding-top: 10px;
    padding-bottom: 35px;
    padding-left: 10px;
    padding-right: 10px;

    border-radius: 10px;
    border: 1px solid rgba(183, 174, 174, 0.35);
    background-color: #83b9ee40;

    @media screen and (min-width: 768px) {
        padding-bottom: 10px;
        overflow-y: auto;
    }
`;

export const ProductItem = styled.li`
    position: relative;
    height: 150px;

    display: grid;
    grid-template-columns: minmax(120px, 30%) 1fr;
    gap: 10px;

    padding: 10px;
    border-radius: 10px;
    border: 1px solid #b5b9bcb0;

    background-color: #edf2f7;
`;

export const ImageContainer = styled.div`
    width: 100%;
    min-width: 96px;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: white;
    border: 1px solid #bdc1c4ae;

    overflow: hidden;
`;

export const ProductInfo = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`;

export const ItemName = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

export const PriceTag = styled.span`
    font-size: 16px;
    font-weight: 500;
`;
export const QuantitySelector = styled(TextField)`
    width: 100%;
    .MuiInputBase-root.MuiFilledInput-root {
        background-color: white;
    }

    .MuiInputBase-input.MuiFilledInput-input {
        padding-top: 10px;
        padding-bottom: 10px;
        color: #00000090;
    }
`;

export const DeleteButton = styled.button`
    position: absolute;
    display: block;
    padding: 0;

    top: 5px;
    right: 2.5px;

    background-color: transparent;
    border: none;
`;
export const DeleteIcon = styled(Icon)`
    font-size: 24px;
    color: rgba(0, 0, 0, 0.6);

    &:hover,
    &:focus {
        cursor: pointer;
        color: #e34747;
    }
`;
