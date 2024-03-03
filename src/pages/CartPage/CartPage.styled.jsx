import styled from "@emotion/styled";

export const CartContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    row-gap: 30px;

    @media screen and (min-width: 768px) {
        height: 100%;
        width: 100%;

        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto;
        gap: 16px;
    }
`;
