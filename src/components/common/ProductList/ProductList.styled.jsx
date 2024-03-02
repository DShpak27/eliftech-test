import styled from "@emotion/styled";

export const ProductList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 640px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 8px;
        overflow-y: auto;
    }
`;
