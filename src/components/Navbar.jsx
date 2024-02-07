import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const items = useSelector((state) => state.cart)

    return (
        <>
            <div className='navbar'>

                <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                    <div className='brand-name'>
                        <a href='/'>Redux Toolkit</a>
                    </div>
                    <div className='links'>
                        <Link className='nav-link' to={'/'}>Home</Link>
                        <Link className='nav-link' to={'/cart'}>Cart</Link>
                    </div>
                </div>
                    <div className='cart'>
                        <span>Item: {items.length}</span>
                    </div>
            </div>
        </>
    )
}

export default Navbar
