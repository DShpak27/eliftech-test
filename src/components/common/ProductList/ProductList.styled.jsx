import styled from "@emotion/styled";

export const ProductList = styled.ul`
    width: calc(100%+25px * 2);

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;

    gap: 14px;

    padding-right: 25px;
    padding-left: 25px;
    margin-right: -25px;
    margin-left: -25px;

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        overflow-y: auto;
    }
    @media screen and (min-width: 1440px) {
        grid-template-columns: 1fr 1fr 1fr;
        overflow-y: auto;
    }
`;
