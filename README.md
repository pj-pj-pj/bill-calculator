# bill-calculator

practice project for react

in this project, i applied the fundamentals of react that i have learned like

- how to separate components based on their structures
- working with props and state [ there are so called prop drilling where we pass down components from the parent to their child or grand-grand-grandchild, we also have something called lifting up state where we lift the state from the child/grandchild to their parent component, which i think is mainly used when the sibling component of the said child who originally owns the state needs the info on that state too ]
- trying to make interactive components by using the event listeners but in react
- derived state, which is a state that is derived from existing state, this is a variable where the thing that it stores is dependent on the state that we already have
- also, most things we have in react are immutable, this is important to know when using arrays, because for arrays, when they change, we have to use operations like filter, map, destructuring, etc. because they don't modify the original array
- we use jsx in react, which looks like html elements but they are gonna get converted to react function which creates that element (is how i understand it)
- i also learned about conditional rendering which is very kewl :D basically we use conditional statements (&&, ||, ? :) to decide whether an element will be rendered
- we also have children prop where we can insert 'stuff' between the react elements/functions (eg. <Button />) where when we do that, it looks like an html element with content inside which is normally not the way it is without the children prop

--- i am not good at writing readmes and i dont really know what to write so i am just writing anything ---
