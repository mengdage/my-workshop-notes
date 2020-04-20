# Generics

## Type Parameters

Generics parameterize types in the same way that functions parameterize values.

```typescript
interface Wrapper<T> {
  value: T
}

let val: Wrapper<string> = { value: '' }
val.value // <== Wrapper<string>.value: string
```

## Default Types

Type parameters can have default types

```typescript
// an interface can describe call signatures (functions)
interface FilterFunc<T = any> {
  (val: T): boolean
}

const stringFilter: FilterFunc<string> = val => val.length > 0
```

## Infer T from parameters

We don't need to pass type explicitly to the function. The `fetch` returns a Promise<Response>, there fore T is Response.

```typescript

/**
 * (3) You don't have to use exactly your type parameter as an arg
 * -   things that are based on your type parameter are fine too
 */

function resolveOrTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    // start the timeout, reject when it triggers
    const task = setTimeout(() => reject("time up!"), timeout);

    promise.then(val => {
      // cancel the timeout
      clearTimeout(task);

      // resolve with the value
      resolve(val);
    });
  });
}
resolveOrTimeout(fetch(""), 3000);
```

## Constrains

```typescript
function arrayToDict(array: {id: string}[]): {[k: string]: {id: string}} {
  const out: { [k: string]: {id: string} } = {};
  array.forEach(val => {
    out[val.id] = val;
  });
  return out
}

// The problem is that each item of array must be { id } and cannot have other properties
```

```typescript
// we can use a generics T and add a constain that it must have a id of type string.
function arrayToDict<T extends {id: string}>(array: T[]): {[k: string]: T} {
  const out: { [k: string]: T } = {};
  array.forEach(val => {
    out[val.id] = val;
  });
  return out
}
```

## Scope

Type parameters follow the same rule of scope as function parameters.
```javascript
function startTuple<T>(a: T) {
  return function finishTuple<U>(b: U) {
    return [a, b] as [T, U];
  };
}
const myTuple = startTuple(["first"])(42);
```

## When to use generics

Generics are useful when you need to describe a relationship between two or more types.

```typescript
interface Shape {
  draw();
  isDrawn: bool;
}
interface Circle extends Shape {
  radius: number;
}

function drawShapes1<S extends Shape>(shapes: S[]) {
  shapes.forEach(s => s.draw());
}

// Use Shape directly instead of a type parameter is simpler. Above type param is not necessary
function drawShapes2(shapes: Shape[]) {
  shapes.forEach(s => s.draw());
}

// Now we have a relationship between the arguments and the return type.
// If you give the function Shapes, it returns Shapes.
// If you give the function Circles, it returns Circles.
function drawShapes3<S extends Shape>(shapes: S[]): S[] {
  return shapes.map(s => {
    s.draw()

    s.isDrawn = true
    return s
  })
}

// If you use Shape directly, it does not give you the above flexibility.
// If you give the function Shapes, it returns Shapes.
// If you give the function Circles, it returns Shapes.
function drawShapes3(shapes: Shape[]): Shape[] {
  return shapes.map(s => {
    s.draw()

    s.isDrawn = true
    return s
  })
}
```

Ask for only what you need, return everything you can.
