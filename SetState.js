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
        return ();
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
        return ();
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
