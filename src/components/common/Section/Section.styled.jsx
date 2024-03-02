import styled from "@emotion/styled";

export const Section = styled.section`
    padding: 20px 25px;
    border-radius: 10px;

    background-color: #e0e8f6;

    @media screen and (min-width: 640px) {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
`;
