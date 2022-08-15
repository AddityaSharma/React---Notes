/* The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function. */

// App.js
import React, { Component } from 'react'
import './App.css'
import Counter from './components/Counter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'

class App extends Component {
	render() {
		return (
			<div>
				<Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />}> </Counter>
    
				<Counter
					render={(count, incrementCount) =>
					<HoverCounterTwo
						count={count}
						incrementCount={incrementCount}>
					</HoverCounterTwo>}>
				</Counter>
			</div>
		)
	}
}

export default App

// Counter.js
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Counter

// HoverCounterTwo.js
import React, { Component } from 'react'

class HoverCounterTwo extends Component {

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

export default HoverCounterTwo

// MouseCounterTwo.js
import React, { Component } from 'react'

class ClickCounterTwo extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

export default ClickCounterTwo

