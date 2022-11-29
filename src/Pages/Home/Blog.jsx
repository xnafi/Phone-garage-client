import React from 'react'

const Blog = () => {
    return (
        <div className='w-8/12 mx-auto my-10'>
            <div className='mb-10'>
                <h4 className='text-xl font-bold mb-5'>1. What are the different ways to manage a state in a React application?</h4>
                <p className='text-justify'>The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.
                    The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.
                    We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.
                </p>
            </div>
            <div className='mb-10'>
                <h4 className='text-xl font-bold mb-5'>2. How does prototypical inheritance work?</h4>
                <p className='text-justify'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.
                    When we read a property from object, and it's missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.
                </p>
            </div>
            <div className='mb-10'>
                <h4 className='text-xl font-bold mb-5'>3. What is a unit test? Why should we write unit tests?</h4>
                <p className='text-justify'>Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated. A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.
                </p>
            </div>
            <div className='mb-10'>
                <h4 className='text-xl font-bold mb-5'>4. React vs. Angular vs. Vue?</h4>
                <p className='text-justify mb-5'> <span className='font-bold'>React -</span> React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.</p>
                <p className='text-justify mb-5'> <span className='font-bold'>Angular -</span> Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.</p>
                <p className='text-justify'> <span className='font-bold'>Vue -</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.</p>
            </div>
        </div>
    )
}

export default Blog