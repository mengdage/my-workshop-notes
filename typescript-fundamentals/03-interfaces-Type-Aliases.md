# Interface & Type Aliases

Type alias: give a type a name.

```typescript
let x: XXX
// you can give a name to any XXX by using type alias; interface can not do that
```

These are both ways of giving a structure a name that we can import and export.

`Type aliases` are very flexible and can describe anything interface can handle.
`Interfaces` are limited to Javascript object and subtypes (arrays and functions, things that have prototypes).

```typescript
interface ContactMessenger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
}
// colon vs fat arrow
type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void;
```

## Describe constructor

```typescript
interface ContactConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber;
}
```

## Index signature

Index signatures describe how a type will respond to property access.

```typescript
interface PhoneNumberDict {
  // arr[0],  foo['myProp']
  [numberName: string]:
    | undefined
    | {
        areaCode: number;
        num: number;
      };
}
```

At most, a type may have one string and one number index signature

## Declaration Merging

interfaces are "open", meaning any declarations of the same name are merged

```typescript
interface PhoneNumberDict {
  // arr[0],  foo['myProp']
  [numberName: string]: undefined | {
        areaCode: number;
        num: number;
      };
}
interface PhoneNumberDict {
  home: {
    areaCode: number;
    num: number;
  };
  office: {
    areaCode: number;
    num: number;
  };
}
```

## Recursive types

Interfaces are parsed like functions. Only when we attemp to use the interface and access it's properties will we end up figuring out what are the allowd types for this thing.

Type aliases are sorted out eagerly. Interfaces are sorted out lazily.

```typescript
type NumVal = 1 | 2 | 3 | NumArr
interface NumArr extends Array<NumVal2> {

}

const nums: NumArr = [1, 2, 3, [1, 1, 2, 3]]
```
