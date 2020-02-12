import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CustomButton from '../custom-buttom/CustomButton.js'
import CartItem from '../cart-item/CartItem.js'
import {toggleCartHidden} from '../../redux/cart/cartAction.js'
import {selectCartItems} from '../../redux/cart/cartSelector.js'
import './cart-dropdown.scss'

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    })
                    :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                toggleCartHidden()
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));