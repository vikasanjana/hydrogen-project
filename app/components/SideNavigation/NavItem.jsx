import { BoltIcon } from '@heroicons/react/24/outline';
import { NavLink } from '@remix-run/react'
import React from 'react'
import { activeLinkClass, activeLinkStyle } from '~/utils/stylesUtils'

const NavItem = ({ item }) => {
    // if the url is internal, we strip the domain
    const url =
        item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
    return (
        <li key={item.id} className='navItem'>
            <NavLink
                className={({ isActive }) => activeLinkClass(isActive)}
                end
                key={item.id}
                prefetch="intent"
                to={url}
            >
                <BoltIcon />
                {item.title}
            </NavLink>
        </li>
    )
}

export default NavItem
