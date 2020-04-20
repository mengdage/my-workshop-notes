# Declaration Merging

In TS, an identifier can hold up to three things:
- value
- type
- namespace

```typescript
// value
function foo() {}
// type
interface bar {}
// namespace
namespace baz {
  export const biz = "hello";
}
```

### Value

A variable should be able to hold it.

```typescript
// how to test for a value
const x = foo; // foo is in the value position (RHS)
```

Functions and variables are purely values. Their types may only be extracted using type queries (typeof).

```typescript
const xx = 4;
const yy: typeof xx = 4;
```

### Type

```typescript
// how to test for a type
const y: bar = {}; // bar is in the type position (LHS)
```

Interfaces are purely types

```typescript
interface Address {
  street: string;
}
```

```typescript
/**
 * (4) Classes are both types _and_ values
 */

class Contact {
  name: string;
}

// passes both the value and type tests

const contactClass = Contact; // value relates to the factory for creating instances
const contactInstance: Contact = new Contact(); // interface relates to instances
```

### Namespace

```typescript
// how to test for a namespace (hover over baz symbol)
baz
```
