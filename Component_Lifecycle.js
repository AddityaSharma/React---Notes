/*
==> Lifecycle Methods:
 1) Mounting: When an instance of a component is being created and inserted into the DOM.
 2) Updating: When a component is being re-rendered as a result of changes to either its props or state.
 3) Unmounting: When a component is being removed from the DOM 
 4) Error Handling: When there is an error during rendering, in a lifecycle method, or in the constructor of any child component 

Mounting Lifecycle Methods:
  1) constructor(props): 
  -> Constructor is a special function that will get called whenever a new component is created. 
  -> It is used for initializing state and Binding the event handlers.
  -> Do not cause side effects. Ex: should not be used for making HTTP requests or AJAX calls. 
  -> It is the only place in the component where we can directly overwrite this.state, everywhere else we have to use this.setState() method.
  
  2) static getDerivedStateFromProps( props, state):
  -> It is used when the state of the component depends on changes in props over time. 
  -> This method will either return an object defining the new state of the component or null.
  -> Do not cause side effects. Ex: should not be used for making HTTP requests or AJAX calls.
  
  3) render(): 
  -> It is the only required method in a Component. 
  -> Read props & state and return JSX 
  -> Do not change state or interact with DOM or make ajax calls. 
  -> Children components lifecycle methods are also executed. 
   
  4) componentDidMount( ) 
  -> It is invoked immediately after a component and all its children components have been rendered to the DOM. 
  -> Cause side effects. Ex: It is used to interact with the DOM or perform any ajax calls to load data. 
  -> Called only once during the lifecycle of a component i.e when the component is first rendered, will not be called when the component is updated or re-rendered.
 
Updating Lifecycle Methods: 
  1) static getDerivedStateFromProps(props, state): 
  -> It is used when the state of the component depends on changes in props over time.
  -> This method is called every time a component is re-rendered.
  -> Do not cause side effects. Ex: should not be used for making HTTP requests or AJAX calls. 

  2) shouldComponentUpdate( nextProps, nextState) 
  -> Dictates if the component should re-render or not, general tendency for a component is to update after state or props changes, This method can be used
     to prevent the default behaviour of the component.
  -> Performance optimization.
  -> Do not cause side effects. Ex: HTTP requests or Calling the setState method.
  
  3) render(): 
  -> It is the only required method in a Component. 
  -> Read props & state and return JSX 
  -> Do not change state or interact with DOM or make ajax calls. 
  -> Children components lifecycle methods are also executed. 
  
  4) getSnapshotBeforeUpdate(prevProps, prevState):
  -> It is called right before the changes from the virtual DOM are to be reflected in the DOM 
  -> Capture some information from the DOM. 
  -> Method will either return null or return a value. Returned value will be passed as the third parameter to the next method. 

  5) componentDidUpdate(prevProps, prevState, snapshot):
  -> It is called after the render is finished in the re-render cycles. 
  -> Cause side effects. Ex: It is used to interact with the DOM or perform any ajax calls to load data. 
  
Unmounting Phase Method:
  1) componentWillUnmount():
  -> This method is invoked immediately before a component is unmounted and destroyed. 
  -> It is used for cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers. 
  -> Do not call the setState method. 
  
Error Handling Phase Methods 
  1) static getDerivedStateFromError(error) 
  2) componentDidCatch(error, info) 
  => These both Methods are used when there is an error either during rendering, in a lifecycle method, or in the constructor of any child component. 
  
  ==> Error Boundary:
    > A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary. 
    > The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used 
      to log the error information. 
*/      
      
// Hero.js Component:
import React from 'react'

function Hero ({ heroName }) {
  if (heroName === 'Joker') {
    throw new Error(' Not a hero!')
  }
  return <h1>{heroName}</h1>
}

export default Hero

// Error Boundary Component: 
import React, { Component } from 'react'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}
  
	static getDerivedStateFromError(error) {
		return { hasError: true }
	}

  // used to console the error and its related information:
	componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
	}

	render() {
    // used to render the fallback UI:
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary

/*
Summary: 
> Error boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fall-back UI. 
> A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods. 
> The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem. 
> Provide a way to gracefully handle error in application code. 
*/
