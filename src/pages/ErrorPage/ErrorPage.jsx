import { BackToHome, ErrorCode, ErrorContainer, ErrorMessage } from "./ErrorPage.styled.jsx";

export default function ErrorPage() {
    return (
        <ErrorContainer>
            <ErrorCode>404</ErrorCode>
            <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
            <BackToHome to="/">Back to Home</BackToHome>
        </ErrorContainer>
    );
}
