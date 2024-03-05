import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const CustomerInfoFields = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 35px;

    padding-top: 10px;
    padding-bottom: 35px;
    padding-left: 10px;
    padding-right: 10px;

    border-radius: 10px;
    border: 1px solid rgba(183, 174, 174, 0.35);
    background-color: #83b9ee40;

    @media screen and (min-width: 768px) {
        justify-content: center;
        padding-bottom: 10px;
        row-gap: 45px;
    }
`;

export const Input = styled(TextField)`
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
`;
