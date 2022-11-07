import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold'>Blogs</h1>
            <br />
            <hr />
            <br />
            <div className='w-3/4 mx-auto'>
                <h2 className='text-3xl font-semibold'>Difference between SQL and NoSQL.</h2>
                <br />
                <div className='ml-10'>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    <br />
                    <p>There are five practical differences between SQL and NoSQL:</p>
                    <br />
                    <ul className='list-decimal list-inside'>
                        <li>Language</li>
                        <li>Scalability</li>
                        <li>Structure</li>
                        <li>Properties</li>
                        <li>Support and communities</li>
                    </ul>
                    <br />
                    <p className='text-xl font-semibold'>1. Language</p>
                    <br />
                    <p> SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.

                        The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.

                        Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.</p>
                    <br />

                    <p className='text-xl font-semibold'>2. Scalability</p>
                    <br />
                    <p>Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:

                        SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.
                        NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.
                        Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.</p>
                    <br />
                    <p className='text-xl font-semibold'>3. Structure</p>
                    <br />
                    <p>SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.

                        NoSQL databases need not stick to this format, but generally fit into one of four broad categories:

                        Column-oriented databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.
                        Key-Value stores are dictionaries which access diverse objects with a key unique to each.
                        Document stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.
                        Graph databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.</p>
                    <br />
                    <p className='text-xl font-semibold'>4. Properties</p>
                    <br />
                    <p> At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:

                        Atomicity means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.
                        Consistency means that at each step the database follows invariants: rules which validate and prevent corruption.
                        Isolation prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.
                        Durability makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.
                        NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:

                        Consistency: Every request receives the most recent result, or an error. (Note this is different than in ACID)
                        Availability: Every request has a non-error result, regardless of how recent that result is.
                        Partition tolerance: Any delays or losses between nodes will not interrupt the system’s operation.</p>
                    <br />
                    <p className='text-xl font-semibold'>5. Support and communities</p>
                    <br />
                    <p> SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.

                        NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.

                        SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.</p>
                </div>
                <br />
                <h2 className='text-3xl font-semibold'>What is JWT, and how does it work?</h2>
                <br />
                <div className='ml-10'>
                    <p><strong>JWT</strong>, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <br />
                    <p>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.</p>
                    <br />
                    <p> a <strong>token</strong> is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. </p>
                    <br />
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    <br />
                    <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    <br />
                    <p>Once decoded, two JSON strings will be provided:</p>
                    <ul>
                        <li>Header & Payload</li>
                        <li>Signature</li>
                    </ul>
                    <br />
                    <p>The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature</p>
                </div>
                <br />
                <h2 className='text-3xl font-semibold'>What is the difference between javascript and NodeJS?</h2>
                <br />
                <div className='ml-10'>
                    <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.</p>
                    <br />
                    <p>2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
                    <br />
                    <p>3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
                    <br />
                    <p> 4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.</p>
                    <br />
                    <p>5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.
                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.</p>
                </div>
                <br />
                <h2 className='text-3xl font-semibold'>How does NodeJS handle multiple requests at the same time?</h2>
                <br />
                <div className='ml-10'>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                    <br />
                    <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Blogs;