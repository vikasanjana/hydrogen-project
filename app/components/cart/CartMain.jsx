import { useOptimisticCart } from '@shopify/hydrogen';
import { Link } from '@remix-run/react';
import { useAside } from '~/components/Aside';
import { CartSummary } from './CartSummary';
import CartEmpty from './CartEmpty';
import { CartLineItem } from './CartLineItem';

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 * @param {CartMainProps}
 */
export function CartMain({ layout, cart: originalCart }) {
    // The useOptimisticCart hook applies pending actions to the cart
    // so the user immediately sees feedback when they modify the cart.
    const cart = useOptimisticCart(originalCart);

    const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
    const withDiscount =
        cart &&
        Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
    const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;
    const cartHasItems = cart?.totalQuantity > 0;

    return (
        <div className={className}>
            <CartEmpty hidden={linesCount} layout={layout} />
            <div className="cart-details">
                <div aria-labelledby="cart-lines">
                    <ul>
                        {(cart?.lines?.nodes ?? []).map((line) => (
                            <CartLineItem key={line.id} line={line} layout={layout} />
                        ))}
                    </ul>
                </div>
                {cartHasItems && <CartSummary cart={cart} layout={layout} />}
            </div>
        </div>
    );
}

/** @typedef {'page' | 'aside'} CartLayout */
/**
 * @typedef {{
 *   cart: CartApiQueryFragment | null;
 *   layout: CartLayout;
 * }} CartMainProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
