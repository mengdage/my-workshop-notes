# TypeScript Basics

* Simple Variables
* Arrays & Tuples
* Objects
* Union & Intersection Types

Reassignment is the difference between `let` and `const`.

## string *literal type*

```typescript
/**
 * (4) let's look at const. The type is literally 'hello world'
 */
const y = "hello world";
```

## When to provide explicit type information

Provide an explict contract between different parts by explicitly setting type information.
  - function arguments and return values

*If the type is obvious, like variable declaration with initialization, we don't need to.*

## Array

```typescript
let a = [] // a is never[]; we cannot push anything in never[]
// For array declaration which starts out as empty, be specific by setting types
```

## Tuple

```typescript
/**
 * (10) Tuple values often require type annotations (  : [number, number] )
 */
const xx = [32, 31]; // number[];
const yy: [number, number] = [32, 31];
```

## Intersection types

A variable of an intersection type can have a value of either type.
However, we can only access the common properties among the types.

## Union types

A variable of an union type must have a value that is assignable to all types.
We can access all properties of the types.

# Type Systems & Type Equivalence

```typescript
function validateInputField(input: HTMLInputElement) {

}
validateInputField(x)
// Can we regard x as an HTMLInputElement
```

`Nominal Type Systems` answer this question based on whether x is an *instance* of a class/type named `HTMLInputElement`.

`Structural Type Systems` only care about the *shape* of an object.

## Object Shapes

The shape of an object is the `names` of its properties and `types` of their values.

## Wider vs. Narrower types

Wider is more general.
Narrower is more specific.

```typescript
// Types become narrower from left to right
any > any[] > string[] > [string, string, string]

// nothing
never
```

# Function Basics

- Functions and function types.
- *Always add type annotations for function arguments and return.*
- VSCode can infer the type of the return result of a function pretty well.

## Overload signatures

```typescript
// "overload signatures"
function contactPeople(method: "email", ...people: HasEmail[]): void;
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

// "function implementation"
function contactPeople(
  method: "email" | "phone",
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === "email") {
    (people as HasEmail[]).forEach(sendEmail);
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}
```

The implementation must be wide enough for those overload signatures.

## Lexical Scope

Lexical scope in Javascript: what is the value of `this` when you invoke a function.
