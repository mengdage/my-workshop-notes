# Rounting

- Flexible pattern matching
- Handles parameters
- Multi router support
- Static & dynamic configuration
- Support for _all_ HTTP verbs: get, put, delete, 
- Order based

## Routing with Express

```javascript
const app = express()
const apiRouter = express.Router()
apiRouter.get('/', (req, res) => res.json({ api: true }))
app.use('/api', apiRouter)
```

Your app needs data which is completely different in the way the rest is designed. It needs association, nested structures, which REST does satisfy. You would optimize for the client so that the client doesn't have to make multiple calls to get the data. You modify the backend and now you don't do REST anymore. REST is a structural way   to define our routes to interact with the resource by utilizing HTTP verbs.

## Controllers and Responding

Controllers do the responding to requestion.

- Access to incoming request
`(req, res, next) => {}`
- Reuse controllers
- Async or Sync (should be async for prod)
- Composable (middleware)
- Can respond with anything

```javascript
const createOneController = (model) => (req, res, next) {
  return baseController.createOne(model, req.body)
    .then(result => res.json(result))
    .catch(e => res.status(500).send('Things are not looking good.))
}
```