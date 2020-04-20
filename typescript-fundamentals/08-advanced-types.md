# Advanced Types

## Maped Types

```typescript
interface CommunicationMethods {
  email: HasEmail;
  phone: HasPhoneNumber;
  fax: { fax: number };
}

function contact<K extends keyof CommunicationMethods>(
  method: K,
  contact: CommunicationMethods[K] // 💡turning key into value -- a *mapped type*
) {
  //...
}
contact("email", { name: "foo", email: "mike@example.com" });
contact("phone", { name: "foo", phone: 3213332222 });
contact("fax", { fax: 1231 });
```

## Type Queries

Type queries allow us to obtain the type from a value using typeof.

```typescript
const alreadyResolvedNum = Promise.resolve(4);

type ResolveType = typeof Promise.resolve;
```

## Conditional Types

```typescript
// this is the only place where you can use `infer`
type EventualType<T> = T extends Promise<infer S> // if T extends Promise<any>
  ? S // extract the type the promise resolves to
  : T; // otherwise just let T pass through

let a: EventualType<Promise<number>>;
let b: EventualType<number[]>;
```

## Built-in Unitity Types

### Partial

Partial allowes to make all properties on an object optional.

```typescript
type MayHaveEmail = Partial<HasEmail>;
const me: MayHaveEmail = {}; // everything is optional
```

### Pick

Pick allows us to select one or more properties from an object type 

```typescript
type HasThen<T> = Pick<Promise<T>, "then" | "catch">;

let hasThen: HasThen<number> = Promise.resolve(4);
hasThen.then;
```

