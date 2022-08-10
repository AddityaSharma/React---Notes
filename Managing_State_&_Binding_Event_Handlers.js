/* Setting up the State object for a Component: */

// --> state is an Object that is always present for a particular Component.
// --> we just define certain keys in the object and assign them values, so as whenever an object is created, it can have some default values.
// --> we define this in a constructor, so that whenever an instance of that class i.e a component is created, the state of that component is defined.

// declaring a constructor for the CartItem Class:
constructor(){
    // calling the parent class of the CartItem Class -> as our class inherits properties from the React.Component class.
    super();

    // defining the state object for the component: -> declaring the keys and the values.
    this.state = {
      title: 'Phone',
      price: 9999,
      qty: 1,
    }
}

// --> accessing the state values defined:
import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Phone',
            price: 9999,
            qty: 1,
        }
    }
  
    render() {
        // using destructuring to assign variable the data from the state object:
        const {title, price, qty} = this.state;

        return (
            <div className="cart-item">
                <div> {title} </div>
                <div> Rs {price}</div>
                <div> Qty: {qty} </div>
            </div>
        )
    }
}

export default CartItem;

/* Binding the Objects instance to a function that assigned to a varibale: */
// --> whenever we create a member function inside a class, 'this' inside that function points to the instance of the object from which it is called.
// --> 'this' inside the constructor function will again correspond to the instance of the object for which it is called.
// --> now what we render in react is actually an instance of that class, where that render statmenet is written.
// --> 'this' inside the render function corresponds to the object which is being rendered.

/*
=> now understand the problem involving the this keyword:

Explanation-1:
when we write something like 'onClick = this.increaseQuantity', the 'this' keyword corresponds to the instance that is being rendered and we are 
calling the function 'increaseQuantity' on that instance. Now, here specifically we are assigning that function 'increaseQuantity' to the variable onClick
and then that function is being called using that reference of that variable - 'onClick()' -> due to this assigment of the function to a variable, the value 
of the 'this' inside that function becomes 'undefined'.
so we can say in simpler terms that if a function defined inside a class is assigned to a variable and then using that variable we call that function, then
the reference to that object from which it is called i.e 'this' becomes 'undefined'.

Explanation-2:
'this' keyword is undefined because 'this' used within a function returns 'window' object on the browser and 'global' object inside nodejs environment. 
Since 'react strict mode' is enabled, it is returning 'undefined'. 
*/

//--> So how can we make sure that the reference to the object is not lost:

// method - 1: we use the bind function, whenever we assign the function to a varible: --> onClick = this.increaseQuantity.bind(this)
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = { ... define properties }
    }
  
    // function defined inside a Class:
    increaseQuantity(){
        console.log(this); // this corresponds to the object which we pass using the bind() function.
    }

    render() {
        return (
            <img
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick = {this.increaseQuantity.bind(this)}
            />
        )
    }
}

// method - 2: define the object to which the function is binded in the class explicitly: 
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = { ... define properties }
        
        // explicity defining the object to which the function is binded -> need to be done in Constructor.
        this.increaseQuantity = this.increaseQuantity.bind(this)
    }
  
    // function defined inside a Class:
    increaseQuantity(){
        console.log(this); // this corresponds to the object which we pass using the bind() function.
    }

    render() {
        return (
            <img
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick = {this.increaseQuantity}
            />
        )
    }
}

// method - 3: using arrow function during Event assignment:
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = { ... define properties }
    }
  
    // function defined inside a Class:.
    increaseQuantity{
        console.log(this);
    }

    render() {
        return (
            <img
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick = {() => this.increaseQuantity()}
            />
        )
    }
}

// method - 4: using arrow function(Preffered):
// --> arrow functions automatically binds the value of the 'this', whenever we assign the function to some variable.
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = { ... define properties }
    }
  
    // function defined inside a Class: -> using arrow function.
    increaseQuantity = () => {
        console.log(this);
    }

    render() {
        return (
            <img
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick = {this.increaseQuantity}
            />
        )
    }
}
