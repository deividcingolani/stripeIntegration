import React from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
      base: {
        iconColor: "rgb(240, 57, 122)",
        color: "rgb(240, 57, 122)",
        fontSize: "16px",
        fontFamily: '"Open Sans", sans-serif',
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "#CFD7DF"
        }
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238"
        }
      }
    }
  };

function CardSection() {
    return <CardElement options={CARD_ELEMENT_OPTIONS} />;
}

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async e => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if(error){
            console.log(error);
        } else {
            console.log(paymentMethod);
        }
    };

    return (
        <form 
            onSubmit={handleSubmit}
        >
            <CardSection />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

export default CheckoutForm;