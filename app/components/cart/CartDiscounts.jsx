import React from 'react'
import UpdateDiscountForm from './UpdateDiscountForm';

/**
 * @param {{
*   discountCodes?: CartApiQueryFragment['discountCodes'];
* }}
*/
const CartDiscounts = ({ discountCodes }) => {
    const codes =
        discountCodes
            ?.filter((discount) => discount.applicable)
            ?.map(({ code }) => code) || [];

    return (
        <div>
            {/* Have existing discount, display it with a remove option */}
            <dl hidden={!codes.length}>
                <div>
                    <dt>Discount(s)</dt>
                    <UpdateDiscountForm>
                        <div className="cart-discount">
                            <code>{codes?.join(', ')}</code>
                            &nbsp;
                            <button>Remove</button>
                        </div>
                    </UpdateDiscountForm>
                </div>
            </dl>

            {/* Show an input to apply a discount */}
            <UpdateDiscountForm discountCodes={codes}>
                <div>
                    <input type="text" name="discountCode" placeholder="Discount code" />
                    &nbsp;
                    <button type="submit">Apply</button>
                </div>
            </UpdateDiscountForm>
        </div>
    );
}

export default CartDiscounts
