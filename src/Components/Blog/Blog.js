import React from 'react';
import "./Blog.css";
import code from './code.png';

const Blog = () => {
    return (
        <div className='d-flex flex-column align-items-center mt-5'>
            <div className="blogs w-75 ">
                <div className="question mt-2">
                    <h2> How does react Work?</h2>
                    <div className="answer">
                    While building client-side apps, a team of Facebook developers realized that the DOM is slow 
                    (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML
                     documents. It defines the logical structure of documents and the way a document is accessed and
                      manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree
                       representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual 
                       representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s
                        DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create.
                        React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
                    </div>
                </div>
                <div className="question mt-5">
                    <h2>How does Context Api work?</h2>
                    <div className="answer">
                    
                    The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.

                        “Prop drilling (also called “threading”) refers to the process you have to go through to get data to parts of the React Component tree.” – Kent C. Dodds.

                        Before the Context API, we could use a module to solve this, which led to the increasing popularity of state management libraries like Redux. Libraries like Redux allows you to get data from the store easily, anywhere in the tree. However, let’s focus on the Context API.

                        Related: The what and why of Redux.

                        The Context API has actually always been there but was considered experimental. Moving forward the API was improved to stability, and as of the release of version 16.3, the feature was made available and subsequently considered a new addition to the clan of features that make React a wonderful framework.

                        Before now many of the tools we have been used to like react-redux, react-native-flux, MobX-react, and react-router all used context to function, so you were probably already using and loving it, even if not directly. So let’s learn how best to use it.

                        When to use the Context API
                        As we mentioned earlier, the Context API is useful for sharing data that can be considered global, such as the currently authenticated user, the theme settings for the application, and more. In situations where we have these types of data, we can use the Context API and we don’t necessarily have to use extra modules.

                        In fact, any situation where you have to pass a prop through a component so it reaches another component somewhere down the tree is where you can use the Context API.
                    </div>
                </div>
                <div className="question mt-5">
                    <h2>What is useRef?</h2>
                    <div className="answer">
                    <p> 
                        useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
                        The returned object will persist for the full lifetime of the component.
                    </p>
                  A common use case is to access a child imperatively:
                <br/>
                <img className='img-fluid' src={code} alt="code here" />
                
                    </div>
                </div>
             

            </div>
            
        </div>
    );
};

export default Blog;