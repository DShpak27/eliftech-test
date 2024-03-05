import styled from "@emotion/styled";

export const ShopContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media screen and (min-width: 768px) {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: row;
        column-gap: 16px;
    }
`;
