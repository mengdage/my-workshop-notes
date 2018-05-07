# type checking

Type checking is becoming increasingly popular.
- React's proptypes
- Facebook's Flow
- Microsoft's TypeScript

## Reasons to use types

- Catch more bugs at compile time.
- Better developr experience.
- More expressive code.
- Avoid de-optimized code.

## Activate type checking in vs code

- If the project is already set up for TypeScript, just add `"checkJs": true` in the `tsconfig.json`.
- Add a comment at the top of the JS file.

## Structural Typing

Decisions about whether types are equivalent are made based on their **structure** - [Structural type system](https://en.wikipedia.org/wiki/Structural_type_system).

```ts
interface CartItem {
  item: {
    name: string
    description: string
    price: number
  }
  quantity: number
}
```

In vs code, it use `structural` type system.

## Annotating Types with JSDoc

- Types can be added as comments.

```js
// @ts-check

/** @type {number} */
let value;

value = 21;   // ✅ Ok
value = '21'; // 🚫 Not Ok
```

- Constructors are regarded as types too.
- But, it's still structural.

```js
/** @type {Element} */
let x = document.querySelector('.passwordField');
```



