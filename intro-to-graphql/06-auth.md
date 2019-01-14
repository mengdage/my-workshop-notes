# Authentication

## Many ways to auth

tldr: There is not wrong way.

- Lock down the entire API by checking auth outside of GraphQL or when creating the context object.
- Handle auth in the resolvers (just make sure you enhance the context object with all that you need)
- Use custom directives in your SDL (NEW)
- Use resolver middleware (in some frameworks)
- choose wisely
