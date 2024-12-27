import { CartForm, Money } from '@shopify/hydrogen';
import { useRef } from 'react';
import CartDiscounts from './CartDiscounts';
import CartGiftCard from './CartGiftCard';
import CartCheckoutActions from './CartCheckoutActions';

/**
 * @param {CartSummaryProps}
 */     
export function CartSummary({ cart, layout }) {
    const className =
        layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';

    return (
        <div aria-labelledby="cart-summary" className={className}>
            <h4>Totals</h4>
            <dl className="cart-subtotal">
                <dt>Subtotal</dt>
                <dd>
                    {cart.cost?.subtotalAmount?.amount ? (
                        <Money data={cart.cost?.subtotalAmount} />
                    ) : (
                        '-'
                    )}
                </dd>
            </dl>
            <CartDiscounts discountCodes={cart.discountCodes} />
            <CartGiftCard giftCardCodes={cart.appliedGiftCards} />
            <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </div>
    );
}

/**
 * @typedef {{
 *   cart: OptimisticCart<CartApiQueryFragment | null>;
 *   layout: CartLayout;
 * }} CartSummaryProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('~/components/CartMain').CartLayout} CartLayout */
/** @typedef {import('@shopify/hydrogen').OptimisticCart} OptimisticCart */
