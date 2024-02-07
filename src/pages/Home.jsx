import React, { useEffect, useState } from 'react'
import { add } from '../redux/cardSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
    const [products, setProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProduct(data)
        }
        fetchProducts()
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    return (
        <>
            <div className='product-wrapper'>
                {products.map((product) => {
                    return (
                        <div className='card' key={product.id}>
                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <p>{product.price}</p>
                            <button className='btn'
                                onClick={() => handleAdd(product)}
                            >Add to cart</button>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Home
