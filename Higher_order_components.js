/*
Higher Order Components:
-> Why Higher Order Components are used to share common functionality between components.
-> A pattern where a function takes a component as an argument and returns a new component. 
   => const NewComponent = higherOrderComponent( originalComponent ) 
   => const EnhancedComponent = higherOrderComponent( originalComponent ) 
      Example: const Iron Man = withSuit( TonyStark ) 
*/

// withCounter.js Component:
import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
    render() {
      console.log('HOC', this.props.name)
			return (
				<WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props.name}
				/>
			)
		}
	}
	return WithCounter
}

export default withCounter

// HoverCounter.js Component:
import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

export default withCounter(HoverCounter, 10)

// MouseClick.js Component:
import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

export default withCounter(ClickCounter, 5)
