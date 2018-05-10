# Middleware

`app.use(middles)`

## Error handler middleware

Error handler middleware should be the last middle in the router to catch errors.

`(error, req, res, next) => {}`

```javascript
export const restRouter = express.Router()

restRouter.use('/user', userRouter)
restRouter.use('/song', songRouter)
restRouter.use('/playlist', playlistRouter)
restRouter.use(apiErrorHandler)
```