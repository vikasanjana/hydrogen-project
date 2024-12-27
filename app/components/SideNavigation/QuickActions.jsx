import { PlusCircleIcon, PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

const QuickActions = () => {
    return (
        <div className='quickActions'>
            <h4>Quick actions</h4>
            <a href="#" className='navItem'>
                <span className='quickActionsIcon'>
                    <PlusIcon />
                </span>
                <span className='quickActionsText'>Request for product</span>
            </a>
            <a href="#" className='navItem'>
                <span className='quickActionsIcon'>
                    <PlusIcon />
                </span>
                <span className='quickActionsText'>Add Member</span>
            </a>
        </div>
    )
}

export default QuickActions