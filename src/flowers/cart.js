import React from 'react'

const Cart = (props) => {

    return (
        <div>
            <button onClick={props.addIntoCart}> Add All In Cart</button>
        </div>
    )

}

export default Cart;