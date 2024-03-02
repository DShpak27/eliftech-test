import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;
    gap: 5px;
`;
export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const Card = styled.li`
    width: 300px;
    height: 300px;
    background-color: black;
`;
