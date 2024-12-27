import React, { Suspense } from 'react'
import { Aside } from '../Aside';
import { Await } from '@remix-run/react';
import { CartMain } from './CartMain';

const CartAside = ({ cart }) => {
    return (
        <Aside type="cart" heading="CART">
            <Suspense fallback={<p>Loading cart ...</p>}>
                <Await resolve={cart}>
                    {(cart) => {
                        return <CartMain cart={cart} layout="aside" />;
                    }}
                </Await>
            </Suspense>
        </Aside>
    )
}

export default CartAside
