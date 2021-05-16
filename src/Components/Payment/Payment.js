import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Payment.css'
import CheckoutProduct from '../Checkout/Components/CheckoutProduct/CheckoutProduct'

import {Link} from 'react-router-dom'

function Payment() {

    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout {
                        <Link to="/checkout"> ({basket?.length} items)</Link>
                    }
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        {/* Optional Chaining */}
                        <p>{user?.email}</p>
                        <p>Hno. 252/4,Bhoiwada road</p>
                        <p>Diu, Daman and Diu</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__section">
                        <h1>Payment Method</h1>
                    </div>
                    <div className="payment__details">
                        <h1>Payment Method</h1>+
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
