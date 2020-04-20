# Guards and Extreme Types

Top types are types that can hold any value.

- `any`
- `unknown`


we can do whatever we want with an any, but nothing with an unknow

Bottom type is `never`

## Top Types: When to Use

### `any`

When we want maximum flexibility, we can use `any`.

```typescript
// here we don't care what the type of the promise resolves. 
async function logWhenResolved(p: Promise<any>) {
  const val = await p;
  console.log("Resolved to: ", val);
}
```

### `unknown`

When the type of the value is private/internal that we don't want to expose through a public. Like the return result of setTimeout. It's a number but we should not set the type to number because the library could change the behavior by changing the type of the returned result to a more complicated structure.

They can still hold any value, we just must narrow the type before we're able to use it.

## Type Guards

### Built-in type guards

```typescript
if (typeof myUnknown === "string") {
  // in here, myUnknown is of type string
  myUnknown.split(", "); // ✅ OK
}
if (myUnknown instanceof Promise) {
  // in here, myUnknown is of type Promise<any>
  myUnknown.then(x => console.log(x));
}

```

### User defined guards

```typescript
// 💡 Note return type
function isHasEmail(x: any): x is HasEmail {
  return typeof x.name === "string" && typeof x.email === "string";
}

if (isHasEmail(myUnknown)) {
  // In here, myUnknown is of type HasEmail
  console.log(myUnknown.name, myUnknown.email);
}

// !! my most common guard
// with type parameter
function isDefined<T>(arg: T | undefined): arg is T {
  return typeof arg !== "undefined";
}

// list has type (numner | undefined [])
const list = [1, 2, 3, undefined, 5]
// filter has type number[]
const filter = list.filter(isDefined)
```

## Bottom Type

Bottom type `never` can hold no values. We usually do not create a never type ourselves. We end up with a never through narrowing exhaustively.

```typescript
let x = "abc" as string | number;

if (typeof x === "string") {
  // x is a string here
  x.split(", ");
} else if (typeof x === "number") {
  // x is a number here
  x.toFixed(2);
} else {
  // x is a never here
}
```

We can use `never` to our advantage.

```typescript
class UnreachableError extends Error {
  constructor(val: never, message: string) {
    super(`TypeScript thought we could never end up here\n${message}`);
  }
}

let y = 4 as string | number;

if (typeof y === "string") {
  // y is a string here
  y.split(", ");
} else if (typeof y === "number") {
  // y is a number here
  y.toFixed(2);
} else {
  throw new UnreachableError(y, "y should be a string or number");
}
```
