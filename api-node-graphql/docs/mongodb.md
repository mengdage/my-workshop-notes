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

## CRUD in controllers

- Create controllers for each http verbs + route configuration.

- Use information from request and middleware to provide details to DB queries and inserts.

  - Query params
  - Route params
  - Tokens
  - Cookies
  - IP's

- Keep it async
- Try to minimize touching the DB.

```javascript
// Model level

// retrieve
const song = await Song.findById(id).exec()

Song.findOne({name: 'thisname'}).exec()
// create
// 1
const song = new Song({})
song.save()
// 2
Song.create({})

// update
Song.findOneAndUpdate({name: 'thisname'}, {name: 'othername'}, {new: true})

// document level
song.name = 'anothername'
const newSong = await song.save() // .remove(); .populate(); ...
```