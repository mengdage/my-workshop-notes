# Intro

## What is an API

tldr: a server that creates an HTTP interface for interacting with some data.

- Application Programming Interface
- The name is used EVERYWHERE.
- Usually a server on some remote machine that dictates how other application can interact with some data.
- Basic data operation: CRUD
  client -- API -- database

## What is REST

tldr: most popular API design patter. But it 's very blurry.

- An API design that combines `DB resources`, `route paths`, and `HTTP verbs` to allow applications `describe` what action they are trying to perform.
- Become popular when SaaS products starting offering APIs for developers to integrate.
- Works with basic data models
  - retional, flat data models
- Hard to scale with complex data models and client requirements.
  - graph DB: all data nodes are connected

## Node.js and APIs

tldr: build for high concurrent APIs that are `not` CPU intensive.

- Node.js is JavaScript, it's async and event driven.
- Single threaded (can optimize)
- When kept async, Node can handle a high amount of concurrent request.
- Not great for CPU intensive work (data crunching, ML, big maths)
- So many open source tools to help buld APIs.

## Express

tldr: the standard API framework for Node.js

- Handles all the tedious tasks like `managing sockets`, `route matching`, `error handling` and more.
- Open source.
- Huge community and support from anything that has to do with APIs in Node.js.

## MongoDB

tldr: the go-to non-relational DB, works like a dream in Node.js

- Non-relational document store that is easy to get started and scales well.
- Open source and backed by a big company.
- Tons of hosting solutions.
- ORM/ODM and other libs are some of the best for any DB.




