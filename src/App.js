import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';

const STRIPE_PUBLISHABLE_KEY = 'pk_test_51IlIoYBhf7mFz8SCJYmdkhuvvxidJBeu47KbOGaySQD60WkNLu2Q3MfWfgvGJF1blZaPKNCHHBE7Vfwzub0lw9zG00trRoTh7Z';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

function App() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default App;