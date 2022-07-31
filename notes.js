/* creating file for a Component: */

// importing the React module:
import React from "react";

// creating a Class for the new Component that inherits the properties from the React.Component class:
class CartItem extends React.Component {
    render() {
      return (
          // the JsX code written here inside will be the structure of the component:
          <h1> Hello World! </h1>
      )
    }
}

// Exporting the Component created:
export default CartItem;


/* Adding css to the Component: */

// Method - 1: using className Attribute of the tags and Defining the styles in the corresponding .css file:

// Method - 2: using the style Attribute of the tags and defining the corresponding styles in form of an Object in the same file:
import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                {/* assigning the styles to the img tag defined in an object. */}
                {/* the style Attribute takes the values in form of an object. */}  
                {/* Here styles is an object that have image as one of its key, and the image key is itself an object. */}
                <img style = {styles.image} /> 
            </div>
        )
    }
}

// declaring the styles in the form of a Object:
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc',
    }
}

export default CartItem;

// Method - 3: Extension of the 2nd method -> writing the object directly inside the style Attribute rather than defining it in a seperate Object:
import React from "react";

class CartItem extends React.Component {
    render() {
        return (
             <div>
                  {/* writing the object directly inside the style Attribute */}
                  <div style={{fontSize: 25}}> {title} </div>
                  <div style={{color: '#777'}}> Rs {price}</div>
             </div>
        )
    }
}

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
when we write something like 'onClick = this.increaseQuantity', the 'this' keyword corresponds to the instance that is being rendered and we are 
calling the function 'increaseQuantity' on that instance. Now, here specifically we are assigning that function 'increaseQuantity' to the variable onClick
and then that function is being called using that reference of that variable - 'onClick()' -> due to this assigment of the function to a variable, the value 
of the 'this' inside that function becomes 'undefined'.

so we can say in simpler terms that if a function defined inside a class is assigned to a variable and then using that variable we call that function, then
the reference to that object from which it is called i.e 'this' becomes 'undefined'.
*/

//--> So how can we make sure that the reference to the object is now lost:

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
    }
    
    // explicity defining the object to which the function is binded.
    this.increaseQuantity = this.increaseQuantity.bind(this)
  
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

// method - 3: using arrow function:
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

/* Using setState() function to manage the state of a component: */

/*
 --> setState() is a method that is defined in React.Component class, which we inherit during creating Components, it is used to manage / modify the state
 of a Component. By calling the setState() function, we trigger a re-render of the component with the updated data that we have send using the setState function.
 --> setState() function basically make changes in the state object of that Component, it performs a shallow merging of the state object and the data (send in form
 of an object) that we have send.
 --> shallow merging means that only those fields in the state object will be modified which we have passed in the data send as argument in setState() function.
*/

// Format - 1 of using setState:
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = { ... define properties }
    }

    increaseQuantity = () => {
        // here we send an object cantains the keys that need to be modified in the state object and the corresponding values to the keys.
        this.setState({
            qty: this.state.qty + 1
        });
    }

    render() {
        const {title, price, qty} = this.state;

        return (
            <img 
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick = {this.increaseQuantity}
            />
        )
    }
}

// Format - 2 of using setState:
class CartItem extends React.Component {
    constructor(){
        super();
        this.state = { ... define properties }
    }

    increaseQuantity = () => {
        // if previous state is required, then we use this format of setState().
        // here we send an object cantains the keys that need to be modified in the state object and the corresponding values to the keys in the return statement
        // of the callback function.
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })
    }

    render() {
        const {title, price, qty} = this.state;
        
        return (
            <img 
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                onClick = {this.increaseQuantity}
            />
        )
    }
}

/*
Concepts related to setState() Function:

=> Concept of Batching: 
Form - 1 of setState():

--> if we have more than one setState function in an EventListener in form - 1 of setState(), then all the calls to the setState function are merged together 
    (shallow merging), this process is called Batching, and this takes place to make sure that the component is not re-rendered multiple times in a single call to 
    the EventListener. Once all the modifications to the state object of the component are made, then only once the component will be re-rendered.
    
--> The concept of batching was only there in EventListeners till React-17, and was not available in case of AJAX calls, Promise or SetTimeout/SetInterval.
    But from React-18 onwards the batching is now an inherent concept/property for AJAX, Promises and SetTimeout/SetInterval also.
    
--> one key point to note here is that, if we modify the same key in the state object in the form-1 of setState(), then only the last one among them will be considered
    and any modification to the state will take place with respect to that only. consider following example for better understanding:

    Example:
    class CartItem extends React.Component {
        constructor(){
            super();
            this.state = { ... define properties }
        }

        increaseQuantity = () => {
            // Now here we make 3 calls to the setState() function and we are changing the same key in all of them i.e 'qty' but as batching take place
            // only the last 'qty' modification will take place, i.e even after making modification to the value of the qty thrice, only the last one will be reflected.
            this.setState({
                qty: this.state.qty + 1
            });
            
            this.setState({
                qty: this.state.qty + 1
            });
            
            this.setState({
                qty: this.state.qty + 1
            });
        }

        render() {
            const {title, price, qty} = this.state;

            return (
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    onClick = {this.increaseQuantity}
                />
            )
        }
    }


Form - 2 of setState():
--> if we have more than one setState function in an EventListener in form - 2 of setState(), then all the calls to the setState function are merged together 
    (shallow merging), this process is called Batching, and this takes place to make sure that the component is not re-rendered multiple times in a single call to 
    the EventListener. 
--> But in Form - 2 of setState(), the Concept is slightly different as we have callback functions here.
--> incase of more than one setState() the callback functions associated with them are put in a queue in the order in which the setState functions are encountered,
    and then one by one the callback function are taken out of the queue and processesed, but the important point here is that the state object that the next callback
    function will get will be the most recently updated one, this way if we make modifications to the same key in different callbacks, all of them have significance, 
    which is not the case in the Form - 1 of the setState(). consider following example for better understanding:

    Example:
    class CartItem extends React.Component {
        constructor(){
            super();
            this.state = { ... define properties }
        }

        increaseQuantity = () => {
            // here all the callback functions will be out in a queue, and then one by one they will be executed, this way every callback recieve the most-up-to-date
            // state object and modification to the same key thrice will lead to increase in value of qty by 3.
            this.setState((prevState) => {
                return {
                    qty: prevState.qty + 1
                }
            })
            this.setState((prevState) => {
                return {
                    qty: prevState.qty + 1
                }
            })
            this.setState((prevState) => {
                return {
                    qty: prevState.qty + 1
                }
            })
        }

        render() {
            const {title, price, qty} = this.state;

            return (
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    onClick = {this.increaseQuantity}
                />
            )
        }
    }
    
=> Asynchronous Behaviour:
--> the setState() function works in an Asynchronous manner i.e the order of execution is not fixed.
--> so if we want to do something like first make modifications / update the state object for a component and then perform some task using the updated state object, i.e
    perform synchronous behaviour, then react provides us with a method, which is yet another callback function which we can pass in the setState function.
--> this is applicable to both Form - 1 and Form - 2 of the setState function.
    
    Example:
    class CartItem extends React.Component {
        constructor(){
            super();
            this.state = { ... define properties }
        }

        increaseQuantity = () => {
            this.setState((prevState) => {
                return {
                    qty: prevState.qty + 1
                }
            }, () => {
                // callback function for synchronous behaviour.
            });
        }

        render() {
            const {title, price, qty} = this.state;

            return (
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    onClick = {this.increaseQuantity}
                />
            )
        }
    }
*/
