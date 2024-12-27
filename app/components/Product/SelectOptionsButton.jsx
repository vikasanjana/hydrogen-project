import { CartForm } from '@shopify/hydrogen';
import { useAside } from '../Aside';
import { useState } from 'react';
import QuickView from './QuickView';

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: Array<OptimisticCartLineInput>;
 *   onClick?: () => void;
 * }}
 */
export function SelectOptionsButton({
    analytics,
    children,
    disabled,
    product
}) {
    const { open } = useAside();
    const [loading, setLoading] = useState(false);

    const handleSelectOption = async (product) => {
        setLoading(true);
        // Open the Aside with the product details
        open('productDetails', <QuickView product={product} />);
        setLoading(false);
    }
    return (
        <button
            className='select-options-button'
            onClick={() => handleSelectOption(product)}
            disabled={loading}
        >
            {loading ? 'Loading...' : ''}
            {children}
        </button>
    );
}

/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('@shopify/hydrogen').OptimisticCartLineInput} OptimisticCartLineInput */
