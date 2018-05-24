# Scope

- A function has access to its own local scope variables.
- Inputs to a function are treated as local scope variables.
- Block scope can be created with `let`, `const` and curly braces `{}`.
- A function has access to the variables contained within the same scope that function was created in.
- A function's local scope are not available anywhere outside that function.
- ..., regardless of the context it's called in (lexical scope)
- If an inner and outer variable share the same name, there's a variable shadowing.
- A new variable scope is created for every call to a function.
- Closure.
