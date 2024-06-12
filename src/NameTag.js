// import the react library to write JSX

/* write an arrow function called "NameTag" that returns JSX
The JSX returned should consist of:
  - a div element with className attribute of "name-tag" and three nested children elements:
    - an h3 element with className attribute of "title" and the inner text of "HELLO"
    - a p element with className attribute of "subtitle" and the inner text of "my name is"
    - a h2 element with className attribute of "name" and the inner text of your name
*/

/* export our functional component definition to be 
imported then rendered within another module */
import React from "react";
const NameTag = () => (
<div className = "name-tag">
<h3 className = "title"> Hello</h3>
<p className = "subtitle"> my name is</p>
<h2 className = "name">Lucky</h2>
</div>
)
export default NameTag;
