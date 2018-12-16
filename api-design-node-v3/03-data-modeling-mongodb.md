# Data Modeling with Mongodb

## Schemas for a schemaless DB

tldr: You should always use a Schema for models, and mongoose makes it easy.

- MongoDB is a Schemaless document store, but you should always use schemas if you don't want go crazy.
- MongoDB has added support for creating schemas, but Mongoose is much better.
- We can create models for each REST resource we want to expose via the API.

## Schemas to models

tldr: Schemas are the instructions for the models.

- resource <-- model <-- schema
- Schema hold the instructions for models. Things like validations, names, indexes, and hooks.
- Using the schemas, we create models which are objects that let use interact with MongoDB. The models enfore the instructions on the schemas that are used to create them.
- Models will represent our REST resources.

```javascript
// Build a schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: {
    type: String,
    required: true
  }
})


// Create a model based on the schema
const User = mongoose.model('user', userSchema)

// Use the model in controls to access resource exposed over REST APIs.
```

### unique

```javascript
const userSchema = mongoose.Schema({
  id: {
    ...
    unique: true
  }
})
// vs.
userSchema.index({ list: 1, name: 1 }, { unique: true })
```
