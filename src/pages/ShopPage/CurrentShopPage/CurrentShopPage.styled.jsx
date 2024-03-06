import styled from "@emotion/styled";
import { BsSortNumericDownAlt } from "react-icons/bs";
import { BsSortNumericDown } from "react-icons/bs";

export const SortButtonsWrapper = styled.div`
    display: flex;
    column-gap: 8px;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    right: 8px;
    transform: translate(0%, -50%);

    @media screen and (max-width: 400px) {
        right: -23px;
    }
`;
export const SortDownIcon = styled(BsSortNumericDownAlt)`
    display: block;

    &:hover {
        cursor: pointer;
    }
`;
export const SortUpIcon = styled(BsSortNumericDown)`
    display: block;

    &:hover {
        cursor: pointer;
    }
`;
