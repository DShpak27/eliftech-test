import { Form, SubmitButton, SummaryAndSubmit, TotalPrice } from "./CheckoutForm.styled.jsx";
import CustomerDetails from "./CustomerDetails";
import * as yup from "yup";
import Cart from "./Cart";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { getTotalPrice, getCartState } from "../../../redux/cart/selectors.js";

const validationSchema = yup.object({
    name: yup
        .string()
        .required("Enter your name")
        .min(2, "Name should be at least 2 characters")
        .max(60, "Maximum name length is 60 characters"),
    email: yup
        .string()
        .required("Enter your email")
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Invalid email format"),
    phone: yup
        .string()
        .required("Enter your phone number")
        .min(9, "Minimum phone number length is 9 characters")
        .max(15, "Maximum phone number length is 13 characters")
        .matches(/^\d+$/, "Phone number should contain only digits"),
    address: yup
        .string()
        .required("Enter your address")
        .min(20, "Address should be at least 20 characters")
        .max(60, "Maximum address length is 60 characters"),
});

export default function CheckoutForm() {
    const totalPrice = useSelector(getTotalPrice);
    const selectedProducts = useSelector(getCartState);
    console.log(selectedProducts);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(submitHandler)}>
            <CustomerDetails register={register} errors={errors} />
            <Cart products={selectedProducts} />
            <SummaryAndSubmit>
                <TotalPrice>Total price: {totalPrice} ₴</TotalPrice>
                <SubmitButton type="submit">Submit</SubmitButton>
            </SummaryAndSubmit>
        </Form>
    );
}
