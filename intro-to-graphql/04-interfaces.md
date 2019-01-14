# Interfaces

## What

tldr: inheritable types for your schema

- Some types are very similar with the exception of a few fields. You can use an interface as a base type and have other types implement that interface.

- You have to create a special resolver that accepts the previously resolved data and return the GraphQL type name of the intended type, `__reolveType`.

```javascript
// schemas
interface Animal {
  species: String!
}

type Tiger implements Aniaml {
  stripes: Int
  species: String!    // You still need to set the fields
}

type Lion implements Animal {
  color: String
  species: String!    // You still need to set the fields
}

type Query {
  animals: [Animal]!
}

// resolvers
{
  Query: {
    animals() {
      return [
        {species: 'Lion', color: 'yellow'},
        {species: 'Tiger', stripes: 12}
      ]
    }
  },
  Animal: {
    __resolveType(animal) {
      // return a string of the type
      return animal.species
    }
  }
}

// query
{
  animals {
    species
    ... on Tiger {
      strpes
    }
    ... on Lion {
      color
    }
  }
}
```

- You then have to use fragments in your request query to conditionally ask for type specific fields.
