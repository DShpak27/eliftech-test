import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
    text-align: center;
    background-color: #f8f8f8;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ErrorCode = styled.div`
    font-size: 60px;
    color: #e74c3c;
    margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
`;

export const BackToHome = styled(Link)`
    text-decoration: none;
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }
`;
