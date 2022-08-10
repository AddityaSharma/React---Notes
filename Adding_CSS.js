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
