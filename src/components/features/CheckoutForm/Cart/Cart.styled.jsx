import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const SelectedProducts = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 12px;

    padding: 20px 25px;
    border-radius: 10px;
    border: 1px solid rgba(183, 174, 174, 0.35);
    background-color: #83b9ee40;
`;

export const ProductItem = styled.li`
    display: flex;
    gap: 20px;

    padding: 16px;
    border-radius: 10px;
    border: 1px solid #caced1a0;

    background-color: #edf2f7;
`;

export const ImageContainer = styled.div`
    width: 150px;

    display: flex;
    align-items: center;

    border-radius: 10px;
    background-color: white;
    border: 1px solid #e1e8ecdc;

    overflow: hidden;
`;

export const ProductInfo = styled.div`
    width: 250px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const ItemName = styled.span`
    font-size: 16px;
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
    }
`;
