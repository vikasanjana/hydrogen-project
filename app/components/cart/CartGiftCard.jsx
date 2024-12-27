import React, { useRef } from 'react'
import UpdateGiftCardForm from './UpdateGiftCardForm';

/**
 * @param {{
*   giftCardCodes: CartApiQueryFragment['appliedGiftCards'] | undefined;
* }}
*/
const CartGiftCard = ({ giftCardCodes }) => {
    const appliedGiftCardCodes = useRef([]);
    const giftCardCodeInput = useRef(null);
    const codes =
        giftCardCodes?.map(({ lastCharacters }) => `***${lastCharacters}`) || [];

    function saveAppliedCode(code) {
        const formattedCode = code.replace(/\s/g, ''); // Remove spaces
        if (!appliedGiftCardCodes.current.includes(formattedCode)) {
            appliedGiftCardCodes.current.push(formattedCode);
        }
        giftCardCodeInput.current.value = '';
    }

    function removeAppliedCode() {
        appliedGiftCardCodes.current = [];
    }

    return (
        <div>
            {/* Have existing gift card applied, display it with a remove option */}
            <dl hidden={!codes.length}>
                <div>
                    <dt>Applied Gift Card(s)</dt>
                    <UpdateGiftCardForm>
                        <div className="cart-discount">
                            <code>{codes?.join(', ')}</code>
                            &nbsp;
                            <button onSubmit={() => removeAppliedCode}>Remove</button>
                        </div>
                    </UpdateGiftCardForm>
                </div>
            </dl>

            {/* Show an input to apply a discount */}
            <UpdateGiftCardForm
                giftCardCodes={appliedGiftCardCodes.current}
                saveAppliedCode={saveAppliedCode}
            >
                <div>
                    <input
                        type="text"
                        name="giftCardCode"
                        placeholder="Gift card code"
                        ref={giftCardCodeInput}
                    />
                    &nbsp;
                    <button type="submit">Apply</button>
                </div>
            </UpdateGiftCardForm>
        </div>
    );
}

export default CartGiftCard
