import { Link, NavLink } from '@remix-run/react'
import React from 'react'
import { activeLinkStyle } from '~/utils/stylesUtils';
import NavItem from './NavItem';

const Navigation = ({ menu }) => {
    return (
        <div className='Navigation'>
            <ul className='navigationNav'>
                {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
                    if (!item.url) return null;
                    return (
                        <NavItem key={item.id} item={item} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Navigation

const FALLBACK_HEADER_MENU = {
    id: 'gid://shopify/Menu/199655587896',
    items: [
        {
            id: 'gid://shopify/MenuItem/461609500728',
            resourceId: null,
            tags: [],
            title: 'Collections',
            type: 'HTTP',
            url: '/collections',
            items: [],
        },
        {
            id: 'gid://shopify/MenuItem/461609533496',
            resourceId: null,
            tags: [],
            title: 'Blog',
            type: 'HTTP',
            url: '/blogs/journal',
            items: [],
        },
        {
            id: 'gid://shopify/MenuItem/461609566264',
            resourceId: null,
            tags: [],
            title: 'Policies',
            type: 'HTTP',
            url: '/policies',
            items: [],
        },
        {
            id: 'gid://shopify/MenuItem/461609599032',
            resourceId: 'gid://shopify/Page/92591030328',
            tags: [],
            title: 'About',
            type: 'PAGE',
            url: '/pages/about',
            items: [],
        },
    ],
};
