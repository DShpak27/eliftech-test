import styled from "@emotion/styled";

export const Form = styled.form`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    row-gap: 20px;

    @media screen and (min-width: 768px) {
        height: 100%;
        width: 100%;

        grid-template-columns: 50% 1fr;
        grid-template-rows: auto 60px;
        column-gap: 10px;
        row-gap: 10px;
    }
`;
export const SummaryAndSubmit = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    column-gap: 16px;

    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(183, 174, 174, 0.35);
    background-color: #83b9ee40;

    @media screen and (min-width: 768px) {
        grid-column: 2/3;
    }
`;
export const TotalPrice = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

export const SubmitButton = styled.button`
    border: 1px solid rgba(183, 174, 174, 0.35);

    max-width: 130px;
    min-width: 90px;
    padding: 8px 16px;
    text-align: center;

    color: rgba(0, 0, 0, 0.8);

    text-align: center;

    font-size: 18px;
    font-weight: 600;

    transition: all 250ms ease;

    background-color: #f7b31f;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.06);

    transition: all 250ms;

    &:hover,
    &:focus {
        cursor: pointer;
        background-color: #f59c02;
        border-color: #f59c02;
    }

    &:disabled {
        background-color: #ccc;
        color: #666;
        border-color: #999;
        cursor: not-allowed;
        box-shadow: none;
        opacity: 0.6;

        &:hover,
        &:focus {
            background-color: #ccc;
            border-color: #999;
        }
    }
`;
