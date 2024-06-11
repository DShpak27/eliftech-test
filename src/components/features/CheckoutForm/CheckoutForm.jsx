import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalPrice, getCartState } from '../../../redux/cart/selectors.js';
import { useState, useRef, useCallback } from 'react';
import { resetCart } from '../../../redux/cart/slice.js';
import { useEffect } from 'react';
import orderApi from '../../../redux/order/api.js';
import Cart from './Cart';
import CustomerDetails from './CustomerDetails';
import {
  Form,
  SubmitButton,
  SummaryAndSubmit,
  TotalPrice,
  CaptchaHolder,
  Recaptcha,
} from './CheckoutForm.styled.jsx';

const validationSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(2, 'Name should be at least 2 characters')
    .max(60, 'Maximum name length is 60 characters'),
  email: yup
    .string()
    .required()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Invalid email format'
    ),
  phone: yup
    .string()
    .required()
    .min(9, 'Minimum phone number length is 9 characters')
    .max(15, 'Maximum phone number length is 13 characters')
    .matches(/^\d+$/, 'Phone number should contain only digits'),
  address: yup
    .string()
    .required()
    .min(20, 'Address should be at least 20 characters')
    .max(60, 'Maximum address length is 60 characters'),
});

export default function CheckoutForm() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const selectedProducts = useSelector(getCartState);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  const recaptcha = useRef();

  const [placeOrder, { isLoading, isError, error, isSuccess }] =
    orderApi.usePlaceOrderMutation();

  const onCaptchaChange = useCallback(() => {
    setIsCaptchaVerified(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (isError) {
      toast.error(`(${error.status}) ${error.data}`);
      return;
    }
    if (isSuccess) {
      toast.success('Your order has been placed');
      reset();
      dispatch(resetCart());
    }
  }, [isError, error, isSuccess, reset, dispatch]);

  const submitHandler = data => {
    const orderBody = {
      totalPrice,
      customer: {
        ...data,
      },
      items: [...selectedProducts],
    };
    console.log(orderBody);
    placeOrder(orderBody);
  };

  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <CustomerDetails register={register} errors={errors} />
      <Cart products={selectedProducts} />
      <CaptchaHolder>
        <Recaptcha
          ref={recaptcha}
          sitekey={import.meta.env.VITE_SITE_KEY}
          onChange={onCaptchaChange}
          size="normal"
        />
      </CaptchaHolder>
      <SummaryAndSubmit>
        <TotalPrice>Total price: {totalPrice} ₴</TotalPrice>
        <SubmitButton
          type="submit"
          disabled={
            !isValid || !Number(totalPrice) || !isCaptchaVerified || isLoading
          }
        >
          Submit
        </SubmitButton>
      </SummaryAndSubmit>
    </Form>
  );
}
