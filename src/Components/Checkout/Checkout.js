import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Checkout.css'
import CheckoutProduct from './Components/CheckoutProduct/CheckoutProduct'

import Subtotal from './Components/Subtotal/Subtotal'

function Checkout() {

    const [{basket},dispatch] = useStateValue()
    console.log(basket)
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">
                        Your Shopping BAsket
                    </h2>
                    
                    {basket.map(item => (
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

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
