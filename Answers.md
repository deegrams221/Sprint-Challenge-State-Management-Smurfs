1. What problem does the context API help solve?

    Context API makes it easier to create and manipulate state, and solves the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are objects that describe what happens. Reducers are the way state changes based on the described actions, and the store is known as a 'single source of truth' because the whole applicatin is stored in an object tree with in a 'single store'. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

     Application state is global, and component state within a component. Application state is good when you need to access globally, and component state is good for nesting state into the state when you only need data in one specific place.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk uses middleware, which allows you to call action creators that return functions instead of an action object. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I think Redux because it seems like it can make things easier, I like how Context API happens in the background. I feel like I need more time and practice with it to really see all of it's benefits though.
