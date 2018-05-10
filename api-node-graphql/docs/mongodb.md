# MongoDB

A No-SQL document store to store the application's data.

- Very flexible.
- Easy to store data.
- Easy to query data.
- Schemaless.

## Mongoose

The go-to ODM for MongoDB.

- Schemas for saving data.
- Validations
- Querying API
- Lifecycle hooks
- Run time join table (populations)

## Monggose schema

```javascript
const schema = {
  name: String,
  age: {
    type: Number,
    required: [true, 'Error msg: dog\'s is required.']
  },
  isOld: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'owner'
  },
  faveFoods: [String]
}

const dogSchema = new mongoose.Schema(schema)

dogSchema.pre('validation', () => {})

export const dog = mongoose.model('dog', dogSchema)

```