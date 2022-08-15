/*
Context provides a way to pass data through the component tree without having to pass props down manually at every level. 

Steps:
1. Create the context to be shared among components.
2. Provide a context value in one of the parent component.
3. Consume the context value in the desired component. 
*/


// In the following example we have 3 component, where componentF is child of ComponentE, which in turn is the child of componentC, i.e each one is nested 
// within other, and then componentC is the one being rendered in App.js.

// UserContext.js: -> step:1
import React from 'react'

const UserContext = React.createContext('codevolution') // codevoultion will be set as the default value of the context provider.

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

// App.js: -> step:2
import React, { Component } from 'react'
import './App.css'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/userContext'

class App extends Component {
	render() {
		return (
			<div className="App">
        // provide context value in provider.
        <UserProvider value="vishwas">
					<ComponentC />
        </UserProvider>
			</div>
		)
	}
}

export default App
export { UserProvider, UserConsumer }

// ComponentF.js -> step:3
import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
	render() {
		return (
      // using the context value via Consumer.
			<UserConsumer>
				{username => {
					return <div>Hello {username}</div>
				}}
			</UserConsumer>
		)
	}
}

export default ComponentF
