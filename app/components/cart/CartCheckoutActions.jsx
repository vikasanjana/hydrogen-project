import React from 'react'

/**
 * @param {{checkoutUrl?: string}}
 */
const CartCheckoutActions = ({ checkoutUrl }) => {
    if (!checkoutUrl) return null;

    return (
        <div>
            <a href={checkoutUrl} target="_self">
                <p>Continue to Checkout &rarr;</p>
            </a>
            <br />
        </div>
    );
}

export default CartCheckoutActions
