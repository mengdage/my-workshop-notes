# Intro

## GraphQL

tldr: Strongly typed query language and runtime for your data.

- Open source and created by Facebook (spec);
- Gives client the power to describe exactly what data they want.
- Strongly typed.
- Enables excellent developer tooling and experienes.
- Can sit in front of any existing API because its just a query language, instead of an API.
- Ecosystem is fantastic

## GraphQL vs REST

tlder; Different but similar.

- GraphQL only has one URL. It does not need a resource url + verb combo. The request details are in a POST body (sometimes GET).
- In REST, the shape and size of the data resource is determined by the server (the logic code in controller), wich GraphQL its determined by the query(request).
- In REST, you have to make multiple API calls to retrieve *relational data*, which GraphQL you can start with entry resource and traverse all the connections in one request.
- In REST, the shape of the resource is determined by who created the server, in GraphQL the shape is determined by the query.
- In REST, a single request will execute one controller on the server; in GraphQL a request might execute MANY resolvers on the server.

## example

```javascript
  const rootSchema = `
    type Cat {
      name: String
    }

    type Query {
      myCat: Cat
    }

    schema {
      query: Query
    }
  `
  // schame has a query which returns a Query type.
  // Query type has a field myCat which reutrns a Cat type.
  // Cat type has a name of String.

  const server = new ApolloServer({
    typeDefs: [rootSchema],

    // resolvers resolves query Query.myCat which returns something in Cat shape.
    resolvers: {
      Query: {
        myCat() {
          return { name: 'Garfield' }
        }
      }
    },
    context({ req }) {
      // use the authenticate function from utils to auth req, its Async!
      return { user: null }
    }
  })
```

Apollo server has GraphQL playground built in.
