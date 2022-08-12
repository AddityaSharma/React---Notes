/*
==> Pure Component:
Regular Component: A regular component does not implement the shouldComponentUpdate method. It always returns true by default. 
Pure Component: A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison. 

> Shallow comparison (SC): 
  1) Primitive Types: 
     a (SC) b returns true if a and b have the same value and are of the same type Ex: string 'Vishwas' (SC) string 'Vishwas' returns true 
  2) Complex Types: 
     a (SC) b returns true if a and b reference the exact same object. 
     // Example: 
        var a = [1,2,3]; 
        var b = [1,2,3]; 
        var c = a; 
        var ab_eq = (a === b); // false 
        var ac_eq = (a === c); // true 

Pure Component will perform: 
--> shallow comparison of prevState with currentState. 
--> shallow comparison of prevProps with currentProps.
only if there is a difference, re-rendering of the components will take place.

Summary:
> We can create a component by extending the PureComponent class. 
> A PureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component. 
> If there is no difference, the component is not re-rendered — performance boost. 
> It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour. 
> Never mutate the state. Always return a new object that reflects the new state. 

*/
