import React from 'react'
import './Subtotal.css'

import CurrencyFormat  from 'react-currency-format'
import { useStateValue } from '../../../../StateProvider'
import { getBasketTotal } from '../../../../reducer/reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {

    const history = useHistory()
    const [{basket}, dispatch] = useStateValue()
    // console.log(basket)
    // let total_price = 0
  
    // basket.map((values) => {
    //     total_price += values.price
    // })
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) =>(
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator = {true}
                prefix={"$"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
