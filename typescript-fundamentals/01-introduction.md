# What's TypeScript
* An open-source `typed`, `syntactic superset` of JavaScript, developed by Microsoft.
* Static checker that `compiles` to readable JavaScript.
* Comes in three parts: Language, Language Server and Compiler.

# Why add types

* Encode `constraints` and `assumptions`, as part of developer intent.
  * Defensive programming: do not trust any of your inputs, which introduce both performance overhead and cognitive overhead.
* Catch common mistakes.
* Move some `runtime` errors to `compile time`.
* Provider your consumers (including you) with a great DX.

# What you will learn

* Adding type information to variables, functions and classes.
* Configuring the compiler.
* A practical strategy for incrementally converting JS to TS.
  * 3 steps
* Parameterizing interfaces and type aliases with generics.
* Conditional, mapped and branded types.
* TS compiler API basics.

# Configure the Compiler

```
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es2017",
    "outDir": "lib",
    "sourceMap": true,
    "declaration": true
  },
  "include": ["src"]
}
```
`declaration` for creating declaration filter `.d.ts`

```json
{
  "compilerOptions": {
    "jsx": "react", // transform JSX
    "strict": true, // enable strict features
    "sourceMap": true, // forbid implicit any
    "noImplicitAny": true,
    "strictNullChecks": true,
    "allowJs": true, // check + compile JS
    "types": [],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "moduleResolution": "node",
    "target": "es2015",
  },
}
```

TS  => very modern Javascript => Babel => target browsers
