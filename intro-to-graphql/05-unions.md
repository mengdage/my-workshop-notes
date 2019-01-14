# Unions

tldr: A combination type that can be one of many different types that may not relate to each other.

- Some times you want a query to return possibility of more than just one type. Unions allow you to create a type that is composed of many types where any of them may be fulfilled.
  - type1 or type2 or type3
- Great for search queries.
- You have to create a special resolver that accepts the previously resolved data and return the GraphQL type name of the intended type, `__reolveType`.
- You then have to use fragments in your request query to conditionally ask for type specific fields.

```javascript
union SearchItem = Person | Place | Whether

// You need to resolve the concrete type
  SearchItem: {
    __resolveType(Item) {
      // return a string of the type
      return Item.type
    }
  }

// You have to use fragments in your request query
{
  SearchItem {

  }
}
```
