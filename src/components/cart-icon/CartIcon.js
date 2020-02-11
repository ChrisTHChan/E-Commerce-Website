import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cartAction.js'
import {selectCartItemsCount} from '../../redux/cart/cartSelector.js'

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

//memoized value
const mapToStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

//normal
// const mapToStateToProps = (state) => ({
//     itemCount: state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => {return accumulatedQuantity + cartItem.quantity}, 0)
// })

export default connect(mapToStateToProps, mapDispatchToProps)(CartIcon)