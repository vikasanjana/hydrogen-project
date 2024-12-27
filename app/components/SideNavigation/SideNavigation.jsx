import { useRouteLoaderData } from '@remix-run/react';
import React from 'react'
import Logo from '~/components/SideNavigation/Logo';
import Navigation from '~/components/SideNavigation/Navigation';
import QuickActions from './QuickActions';
import LastOrders from './LastOrders';

const SideNavigation = () => {
    /** @type {RootLoader} */
    const data = useRouteLoaderData('root');
    // Get Header 
    const { menu } = data?.header;

    return (
        <div className='sideNavigation'>
            <Logo />
            <Navigation menu={menu} />
            <QuickActions />
            <LastOrders />
        </div>
    )
}

export default SideNavigation
