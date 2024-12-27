import { Link } from '@remix-run/react';
import React from 'react'
import { useAside } from '../Aside';

const CartEmpty = ({ hidden }) => {
    const { close } = useAside();
    return (
        <div hidden={hidden}>
            <br />
            <p>
                Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
                started!
            </p>
            <br />
            <Link to="/collections" onClick={close} prefetch="viewport">
                Continue shopping →
            </Link>
        </div>
    );
}

export default CartEmpty
