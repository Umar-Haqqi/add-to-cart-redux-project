import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../redux/cardSlice'

const Cart = () => {
    const dispatch = useDispatch()

    const cartitems = useSelector((state) => state.cart)
    console.log(cartitems);

    return (
        <>
            <div>
                <h1>Cart Page</h1>
                {
                    cartitems.map((item) => {
                        return (
                            <div className='addedItems' key={item.id}>
                                <img src={item.image} />
                                <div>
                                    <h4>Product: {item.title}</h4>
                                    <p><b>Price:</b> {item.price}</p>
                                    <p><b>Rating:</b> {item.rating.rate}</p>
                                </div>
                                <button className='btn' 
                                    onClick={() => dispatch(remove(item.id))}
                                >Remove</button>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Cart
