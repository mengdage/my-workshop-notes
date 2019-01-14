# Resolvers

## What are resolvers?

tldr: Like controllers, but instead resolve types all the way down.
`routes => controllers; types => resolvers`

- Resolvers are like controllers in a REST API. They are responsible for retrieving data.
- Every query and mutation your schema has, must have a resolver that returns the specific type.
- Types and fields on types often have resolvers too.
- Incoming query dictates what resolvers run and in what order.

## Creating resolvers

tldr: Return the same shape as described in the schema, or delegate to another resolver.

- Resolvers take a few args
  - starting object (what the parent resolver returned or starting value from server)
  - args (any arguments from the incoming request)
  - context (shared context obj across all resolver, like the req object in express)
  - info (advanced AST of the incoming request)
- Any errors is caught and immediately send back to the client
If a resolver throws an error, your server will not crash. It is because graphql wraps all resolvers in try...catch.. and sends errors back to the client if any.

```javascript
// schema
    type Cat {
      name: String!
      age: Int!
      owner: Owner!
    }

    type Owner {
      name: String!
      cat: Cat!
    }

    Query {
      cat(name: String!): Cat!
      owner(name: String!): Owner!
    }

// resolvers
{
  Query: {
    owner(_, args) {
      return { name: args.name, cat: {} }
    },
    cat(_, args) {
      return { name: args.name, age: 3, owner: {} }
    }
  },
  // Resolver for Cat type's fields
  Cat: {
    name()
  }
}
```
