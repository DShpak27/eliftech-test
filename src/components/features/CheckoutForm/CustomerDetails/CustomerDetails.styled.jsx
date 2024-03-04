import { TextField } from "@mui/material";
import styled from "@emotion/styled";

export const CustomerInfoFields = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    padding: 20px 25px;
    border-radius: 10px;
    border: 1px solid rgba(183, 174, 174, 0.35);
    background-color: #83b9ee40;
`;

export const Input = styled(TextField)`
    width: 100%;
    .MuiInputBase-root.MuiFilledInput-root {
        background-color: white;
        .MuiInputBase-input.MuiFilledInput-input {
            color: rgba(0, 0, 0, 0.85);
        }
    }
`;
