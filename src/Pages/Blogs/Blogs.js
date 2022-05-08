import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 shadow-lg'>
            <h1 className='text-center mb-5' style={{color:'#ef5350'}}>QnA</h1>


            <div className=''>
                <h4 style={{ backgroundColor: '#66bb6a' }} className='mt-3 mb-3 p-2'> Difference between javascript and nodejs</h4>
                <p> Javascript is a programming language that is used for writing scripts on the website.Javascript can only be run in the browsers.
                    It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.It is the upgraded version of ECMA script that uses Chromes V8 engine written in C++.Some of the javascript frameworks are RamdaJS, TypedJS, etc.

                    NodeJS is a Javascript runtime environment.
                    We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript.Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.Nodejs is written in C, C++ and Javascript.

                </p>
            </div>
            <div>
                <h4 style={{ backgroundColor: '#66bb6a' }}className='mt-3 mb-3 p-2'> When should you use nodejs and when should you use mongodb</h4>
                <p>Node js is primarily used for non-blocking, event-driven servers,data-intensive due to its single-threaded nature. It's used for traditional web sites and back-end API services. Node JS is best suited for real-time collaborative drawing or editing applications.

                    When i should use mongodb:
                    SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases</p>
            </div>
            <div>
                <h4 style={{ backgroundColor: '#66bb6a' }}className='mt-3 mb-3 p-2'>Differences between SQL and NoSQL Databases</h4>
                <p>SQL RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property

                    NoSQL
                    Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance)</p>
            </div>
            <div>
                <h4 style={{ backgroundColor: '#66bb6a' }}className='mt-3 mb-3 p-2'>What is the purpose of jwt and how does it work?</h4>
                <p>
                  
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued

                    how does it work:
                    1.Users will start by authenticating with a username and password managed by Auth0.

                    2.Once authenticated, the client will receive a JWT representing an access token.

                    3.The client will include the access token in the authorization header of every request to a secure endpoint.

                    4.The server will validate the access token and determine if it has the right permissions, using the information within the token.
                </p>
            </div>
        </div>
    );
};

export default Blogs;