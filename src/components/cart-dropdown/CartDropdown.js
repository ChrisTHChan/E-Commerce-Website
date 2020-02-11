import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../custom-buttom/CustomButton.js'
import CartItem from '../cart-item/CartItem.js'
import {selectCartItems} from '../../redux/cart/cartSelector.js'
import './cart-dropdown.scss'

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

//or

// const mapStateToPropss = (state) => {
        //return {
            //cartItems: state.cart.cartItems
        //}
//}

// const mapStateToProps = ({cart: {cartItems}}) => {
//     return cartItems
// }


export default connect(mapStateToProps)(CartDropdown);