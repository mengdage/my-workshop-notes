# Routing and Middleware

## What is Middleware

tldr: list of functions the execute, in order, before your controllers.

request --> middlewares --> response

- Allow you to execute functions on an incoming request with guaranteed order.
- Great for authenticating, transforming the request, tracking, error handling.
- Middleware can also respond to request like a controller would, but that is not their intent.
  - Even though you can, you should not do that.
  - Middlwares are used to mutate and pass on requests.
  - Controllers are used to respond.

```javascript
const myMiddleware = (req, res, next) => {
  console.log('logging')
  next() // any argument would be taken as error
}

app.use(myMiddleware)
app.get('/path', myMiddleware, () => {})
app.get('/path', [myMiddleware1, myMiddleware2], () => {})
```

## REST routes with Express

tldr: Express was designed with REST in mind that has all you need.

- Express has a robust route matching system that allows to exact, regex, glob, and parameter matching.
  - '/user'
  - '^(he)
  - '/user/*'
  - '/user/:id'
  - REST usually uses `exact matching` and `parameter matching`. (resource/[resource_id])
- It also supports HTTP verbs on a route based level. Together with the routing, you create REST APIs.
  - PUT and POST are very simiar. It's just their intentions are different
- ROutes match in the order they were defined (top to bottm).
- For abstraction, Express allows you to create sub routers that combine to make a full router.
  - When it comes to routing, a router and an app are basically the same thing.

```javascript
const app = Express.app()
const myRouter = Express.router()

myRouter.route('/cat')
  .get()
  .post()
  .put()
  .delete()

app.use('/api'. myRouter)
```
