# Creating Schemas

## GraphQl schema

tldr: GraphQL schema strictly defines what resources, how they relate and how a client and consume them.

- DB schema is for keeping data consistent when entering our DB.
- GraphQl schema is for defining what resources are available for client querying, how they relate, and how you can query them.
- Both schemas can be the same, or not. DB schema is a good starting point for your GraphQl schema.
- GraphQL schema sits in front of your DB queries. It validates incoming request queries.
- Some GraphQL tools create GraphQL APIs based off of your DB schemas, and the other way around.

## Creating schemas with SDL

tldr: Many ways to create schemas, SDL is the best.

- Schema Definition Language.
- Instead of using functions to create a schema, use a verbose, string based syntax for your schemas. Later you can transform that syntax into many other representations if needed.
- Much easier to read.
- Can be composable.
- Supported by all tools.

## Scalar and Object types

tldr: Describe resources that will be used in queries and mutations.

- Scalar types are built in primitives
  - String
  - Int
  - Float
  - Boolean
  - ID
- Object types are custom shapes with fields that are either scalar types or other object types.

```javascript
type Cat {
  name: String
  age: Int!
}
// type Cat is an object type
// type name is a scalar String type
// type age is a scalar Int type
```

- Object type fields also describe any arguments or validations.
  - validation: `age: Int!`, `favorates: [Sring]`.
  - arguments: `name(prefix: String): String`
- Types are the targets of all requests.

## Query and Mutation types

tldr: CRUD on your GraphQL API.

- Query type describes the different queries your API is capable of.
- A query operation is just a name, with possible arguments which eventually return a type.

```javascript
Query {
  cats: [Cat]
}
// cats is a name of query operation.
```

- A mutation is the exact same thing, but with the intent of mutating the DB vs just reading.

```javascript
type Mutation {
  newCat(name: String): NewCat!
}
```

- Queries and Mutations are what will be available to clients to interact with your API. Think of them as your routes.

```javascript
type Cat {
  name: String!
  age: Int!
  bestFriend: Cat
}

input CatInput {
  name: String!
  age: Int!
  bestFriend: Cat
}

type Mutation {
  newCat(input: CatInput!): Cat!
}
```
