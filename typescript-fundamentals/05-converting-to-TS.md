# Convert Javascript to Typescript

## What not to do

- Don’t do functional changes at the same time.
  * As small as null checks
- Don’t attempt this with low test coverage.
- Don’t let the perfect be the enemy of the good.
  * Don’t try to type things too strongly, too early on.
- * Get conversion over first.
- Don’t forget to add tests for your types.
  * DTS
- Don’t publish types for consumer use until you are satisfied.

### Step 1: Compile code in loose mode

* Rename all .js to .ts, allowing implicit any.
* Fix only things that causes compile errors
* Get tests passing.

### Step 2: Explicit any

- Ban implicit any: “noImplicitAny": true
- Where possible, provide a specific and appropriate type
    * Import type for dependencies from DefinitelyTyped
    * Otherwise, explicitly any
- Get tests passing.

### Step 3: Squash explicit anys, enable strict mode

-  In small chunks
-  Enable strict mode
```
"strictNullChecks": true
"strict": true,
"strictFunctionTypes": true
"strictBindCallApply": true
```
- Replace explicit anys with more appropriate types
- Avoid unsafe casts
