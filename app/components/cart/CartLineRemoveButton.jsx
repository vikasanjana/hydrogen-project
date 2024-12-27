import { CartForm } from '@shopify/hydrogen';
import React from 'react'


/**
 * A button that removes a line item from the cart. It is disabled
 * when the line item is new, and the server hasn't yet responded
 * that it was successfully added to the cart.
 * @param {{
*   lineIds: string[];
*   disabled: boolean;
* }}
*/
const CartLineRemoveButton = ({ lineIds, disabled }) => {
    return (
        <CartForm
            route="/cart"
            action={CartForm.ACTIONS.LinesRemove}
            inputs={{ lineIds }}
        >
            <button disabled={disabled} type="submit">
                Remove
            </button>
        </CartForm>
    );
}

export default CartLineRemoveButton
