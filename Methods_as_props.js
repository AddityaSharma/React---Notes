/* Sending the methods(functions) defined in the parent component as props to the child component and then the invocation 
of the method take place in child component: */

/* Parent Component: */
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  // method to be send to the parent component:
  greetParent(childName) {
    // the 'childName' parameter is a way to get value from the child component to the parent component.
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

  render() {
    return (
      <div>
        // sending the method as props:
        <ChildComponent greetHandler = {this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent

/* Child Component: */
import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      // accesing the parent component Method using props in the child component.
      // the function arguments are used to send data from child component to the parent component.
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent


----------------------------------------------------------------------------EXAMPLE------------------------------------------------------------------------------------
/* Raising an event from the child Component and handling it in the parent component */

// Consider we have a Parent Component named 'Cart' in which we have various child components named 'CartItem', the child elements recieve dynamic information
// using props which they render and the state of the child Components reside in the Parent Component. So in order to change the state of the child Components, we
// need to access the state of its parent Component. Thus to achieve this we make a function in the parent component which we pass to the child Component using 
// the props and the child component will trigger this function as per its requirement and via this we will make the required changes in the state persent in the 
// parent component.


// Cart Component:
import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();

        // state of child components / dynamic data passed using props:
        this.state = {
            products : [
                    {
                        title: 'Phone',
                        price: 9999,
                        qty: 1,
                        img: '',
                        id: 1
                    },
                    {
                        title: 'Watch',
                        price: 4999,
                        qty: 1,
                        img: '',
                        id: 2
                    },
                    {
                        title: 'Laptop',
                        price: 35999,
                        qty: 1,
                        img: '',
                        id: 3
                    }
                ]
        }
    }

    // function that will be required to change the state of the child Component.
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty = products[index].qty + 1;

        this.setState({
            products: products
        })
    }

    render() {
        // taking the products array from this.state
        const { products } = this.state;
        
        return (
            <div className="cart">
                {products.map((product) => {
                    return ( 
                        <CartItem 
                            product = {product} 
                            key = {product.id}
                            
                            {/* passing the function to the child component */}
                            onIncreaseQuantity = {this.handleIncreaseQuantity} 
                        /> 
                    )
                })}
            </div>
        )
    }
}

export default Cart;

// CartItem Component:
import React from "react";

class CartItem extends React.Component {
    render() {
        const {title, price, qty} = this.props.product;

        return (
            <div>
                // trigger the function to handle the state in the parent component: -> we pass the component on which we have to trigger the event
                // as there can be many child components and we have to specify the one, whose state we want to modify.
                onClick = {() => this.props.onIncreaseQuantity(this.props.product)}
            </div>
        )
    }
}

export default CartItem;
