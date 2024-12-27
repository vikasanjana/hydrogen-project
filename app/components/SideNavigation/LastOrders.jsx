import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'
import React from 'react'

const LastOrders = () => {
    return (
        <div className='lastOrders'>
            <h4>Last orders <span className='orderCount'>37</span></h4>
            <a href="#" className='navItem'>
                <span className='orderCountImage'>
                    <ArrowPathRoundedSquareIcon />
                </span>
                <span className='orderCountText'>OrderName</span>
            </a>
        </div>
    )
}

export default LastOrders
