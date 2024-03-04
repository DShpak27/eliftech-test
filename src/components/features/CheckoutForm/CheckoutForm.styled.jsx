import styled from "@emotion/styled";

export const Form = styled.form`
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
export const SummaryAndSubmit = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 40px;
`;
export const TotalPrice = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

export const SubmitButton = styled.button`
    border: 1px solid rgba(183, 174, 174, 0.35);

    width: 100%;
    padding: 8px 16px;

    border-radius: 4px;

    color: rgba(0, 0, 0, 0.8);
    background-color: #c9dcf4;

    text-align: center;

    font-size: 18px;
    font-weight: 600;

    transition: all 250ms ease;

    background-color: #f7b31f;
    color: #fff;
    border: 1px solid #e1e8ecdc;
    border-radius: 4px;

    transition: all 250ms;

    &:hover,
    &:focus {
        cursor: pointer;
        background-color: #f59c02;
        border-color: #f59c02;
    }
`;
