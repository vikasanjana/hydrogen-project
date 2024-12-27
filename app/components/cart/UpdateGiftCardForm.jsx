import { CartForm } from '@shopify/hydrogen';
import React from 'react'

/**
 * @param {{
*   giftCardCodes?: string[];
*   saveAppliedCode?: (code: string) => void;
*   removeAppliedCode?: () => void;
*   children: React.ReactNode;
* }}
*/
const UpdateGiftCardForm = ({giftCardCodes, saveAppliedCode, children}) => {
    return (
        <CartForm
            route="/cart"
            action={CartForm.ACTIONS.GiftCardCodesUpdate}
            inputs={{
                giftCardCodes: giftCardCodes || [],
            }}
        >
            {(fetcher) => {
                const code = fetcher.formData?.get('giftCardCode');
                if (code) saveAppliedCode && saveAppliedCode(code);
                return children;
            }}
        </CartForm>
    );
}

export default UpdateGiftCardForm
