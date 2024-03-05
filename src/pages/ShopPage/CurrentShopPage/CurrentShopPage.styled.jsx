import styled from "@emotion/styled";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericUp } from "react-icons/bs";

export const SortButtonsWrapper = styled.div`
    display: flex;
    column-gap: 8px;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    right: 8px;
    transform: translate(0%, -50%);
`;
export const SortDownIcon = styled(BsSortNumericDown)`
    display: block;

    &:hover {
        cursor: pointer;
    }
`;
export const SortUpIcon = styled(BsSortNumericUp)`
    display: block;

    &:hover {
        cursor: pointer;
    }
`;
