# Controllers and working with models

## Routes and controllers

tldr: Controllers are just middleware but with the intent on returning some data.

- Controllers handle what a `Route + Verb` combo can access from the DB.
- Think of them as the final middleware in the stack for a request. There is no intent to proceed to another middleware function after a controller.
  - The only case to call next in controllers is for error handling.
- Controllers implement the logic that interacts with our DB models.
- Can generalize controllers to work for many models because we're going with a REST approach which requires CRUD actions on resources.
  - Instead of creating controllers for every route and model, we can create one controller for each verb and the controller uses the model's interfaces to interact with the resource.


```javascript
get((req, res) => {
  res.status(404).json({ message: 'hello' })
  // Avoid adding code after res.
})
```

## Using models

tldr: Mongoose models work very nicely with CRUD.
No matter what schema you use, you always get the same methods.

- C: model.create({...}); new model({...}); model.create([{...}, {...}, ...])
- R: model.find(), model.findOne(), model.findById()
- U: model.update(), model.findOneAndUpdate(item._id, {...}, {new: true})
- D: model.remove(), model.findOneAndRemove(...)

After we have routers and models, we need to hook our routes up to our models so that we can perform CURD on the models based on the `routes + verbs`. That's exactly what controllers do.
