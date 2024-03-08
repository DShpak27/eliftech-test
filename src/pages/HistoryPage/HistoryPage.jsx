import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Container } from "../../components/common/Container";
import OrderInfo from "../../components/features/OrderInfo";
import {
    OrdersHistoryList,
    OrderHistoryContent,
    OrderRequestForm,
    SubmitButton,
    EmailInput,
} from "./HistoryPage.styled.jsx";
import orderApi from "../../redux/order/api.js";
import validateEmail from "../../helpers/validate-email.js";

export default function HistoryPage() {
    const [email, setEmail] = useState("");
    const [emailValidateMessage, setEmailValidateMessage] = useState("");
    const [getOrders, { data: orders, isSuccess, isError, error, isFetching }] =
        orderApi.useLazyGetOrdersQuery();

    useEffect(() => {
        if (isError) {
            toast.error(`(${error.status}) ${error.data}`);
        }
    }, [isError, error]);

    const handleEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);
        if (validateEmail(email) === false) {
            setEmailValidateMessage("Invalid email format.");
            return;
        }
        setEmailValidateMessage("");
    };

    const handleOrderRequest = (e) => {
        e.preventDefault();
        const value = e.target.elements.email.value;
        if (!value || emailValidateMessage || isFetching) return;
        setEmailValidateMessage("");
        getOrders(value);
    };

    return (
        <>
            <Container
                style={{
                    height: "100%",
                    overflowY: "auto",
                }}
            >
                <OrderHistoryContent>
                    <OrderRequestForm onSubmit={handleOrderRequest}>
                        <EmailInput
                            type="text"
                            label="Enter Your email to find history of orders"
                            name="email"
                            variant="standard"
                            error={Boolean(emailValidateMessage)}
                            helperText={emailValidateMessage}
                            onChange={handleEmailChange}
                            value={email}
                        />
                        <SubmitButton>{isFetching ? "Searching..." : "Search"}</SubmitButton>
                    </OrderRequestForm>
                    {isSuccess && (
                        <OrdersHistoryList>
                            {orders.map((order) => (
                                <OrderInfo key={order._id} order={order} />
                            ))}
                        </OrdersHistoryList>
                    )}
                </OrderHistoryContent>
            </Container>
        </>
    );
}
