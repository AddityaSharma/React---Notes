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
