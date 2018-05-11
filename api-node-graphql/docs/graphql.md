# GraphQL

A query language for your API. Clients describe how they want their data and the shape of it using a query language similar to JSON. Those requests are validated against a Schema you create on your server. Your server then satisfies that shape however it wants using _resolvers_.

- Can be used in tandem with your current API.
- Only needs one route for all requests.
- Doesn't care about how you resolve the data, just has to match the shapes.
- Don't need versions ever again.