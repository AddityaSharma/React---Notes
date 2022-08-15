/* Refs make it possible to access DOM nodes directly within the structure in react. */
/* Refs are only available within a class component */

/* Method-1: (preffered) */
import React, { Component } from 'react'

export class RefsDemo extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef() // step-1: create refernce for a praticular element.
	}

	componentDidMount() {
		this.inputRef.current.focus() // step-3: apply method on reference element(on the current property).
	}

	render() {
		return (
			<div>
        // step-2: link the ref to the required element.
				<input type="text" ref={this.inputRef} /> 
			</div>
		)
	}
}

/* Method-2: */
import React, { Component } from 'react'

export class RefsDemo extends Component {
	constructor(props) {
		super(props)
		this.cbRef = null // step-1: create the reference for a particular element
		this.setCbRef = element => { // step-2: create a method to set the reference property.
			this.cbRef = element
		}
	}

	componentDidMount() {
    // step-4: apply method on reference element.
		if (this.cbRef) {
			this.cbRef.focus()
		}
	}

	render() {
		return (
			<div>
        // step-2: link the ref method to the required element.
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default RefsDemo

/* ref to a child component from a parent component: */
// Parent Component:
import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () => {
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput

// Child Component:
import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusInput() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <input type="text" ref={this.inputRef}></input>
    )
  }
}

export default Input

/* Ref Fowarding: */
// Parent Component:
import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

  render() {
	return (
	 		<div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
	 		</div>
    )}
}

export default FRParentInput

// Child Component:
import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
	return (
		<div>
      <input type="text" ref={ref} />
		</div>
	)
})

export default FRInput
