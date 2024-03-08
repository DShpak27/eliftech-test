import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const OrderHistoryContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`;
export const OrderRequestForm = styled.form`
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;

    @media screen and (min-width: 768px) {
        width: 550px;
    }
`;
export const SubmitButton = styled.button`
    max-width: 130px;
    min-width: 120px;
    padding: 8px 8px;
    text-align: center;

    color: #00000089;
    background-color: #edf2f7;
    font-size: 17px;
    font-weight: 500;

    transition: all 100ms ease;

    border: 1px solid rgba(37, 35, 35, 0.293);
    border-radius: 10px;

    &:hover {
        color: #000000ae;
        cursor: pointer;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
    }
`;

export const OrdersHistoryList = styled.ul`
    display: flex;
    flex-direction: column;

    gap: 16px;
`;

export const EmailInput = styled(TextField)`
    width: 100%;

    .MuiInputBase-root.MuiFilledInput-root {
        background-color: #f3f6f8;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        .MuiInputBase-input.MuiFilledInput-input {
            color: rgba(0, 0, 0, 0.7);
            padding-top: 22px;
        }
    }
    & .MuiFormHelperText-root {
        color: #f04444;
        position: absolute;
        line-height: 1.25;
        top: 101%;
    }

    @media screen and (min-width: 768px) {
        width: 500px;
    }
`;
