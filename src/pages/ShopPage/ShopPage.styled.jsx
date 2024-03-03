import styled from "@emotion/styled";

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        column-gap: 16px;
    }
`;
