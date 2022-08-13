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
		this.cbRef = null // step-1: create the reference for a particular element.
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
