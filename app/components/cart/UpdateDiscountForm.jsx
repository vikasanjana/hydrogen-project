import { CartForm } from '@shopify/hydrogen';
import React from 'react'

/**
 * @param {{
*   discountCodes?: string[];
*   children: React.ReactNode;
* }}
*/
const UpdateDiscountForm = ({discountCodes, children}) => {
    return (
        <CartForm
            route="/cart"
            action={CartForm.ACTIONS.DiscountCodesUpdate}
            inputs={{
                discountCodes: discountCodes || [],
            }}
        >
            {children}
        </CartForm>
    );
}

export default UpdateDiscountForm
