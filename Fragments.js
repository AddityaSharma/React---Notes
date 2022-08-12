/*
React Fregments: Fragments basically let us group children elements without adding extra nodes to the DOM.
*/ 

// Example:
   function FragmentDemo() {
     return (
       <React.Fragment> // sing Fragments instead of Div tag to enclose multiple children elements.
         <h1>Fragment Demo</h1>
         <p>This describes the Fragment Demo component</p>
       </React.Fragment>
     )
   }
  
// => <> Children Elements </> // shorthand representation for <React.Fragment> Children Elements </React.Fragment>

// Utility:
// -> It can be used when we have self-created tags nested but we don't want the enclosing <div> tags, like if we have a table where the table data tag is self-created
// then we cannot wrap the children of table data tag in <div>, as it breaks the rules for nesting:

// => Table.js file 
import React from 'react'
import Columns from './Columns'

function Table() {
	return (
		<table>
			<tbody>
				<tr>
					<Columns /> // self-created component.
				</tr>
			</tbody>
		</table>
	)
}

export default Table

// => Column.js
import React from 'react'

function Columns() {
  return (
    // here we cannot use <div> as <td> tags cannot be enclosed within a div, so we have to used fragments.
    <React.Fragment>
      <td>Name</td>
      <td>Vishwas</td>
    </React.Fragment>
  )
}

export default Columns
