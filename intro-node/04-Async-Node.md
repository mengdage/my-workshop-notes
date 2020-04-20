# Async Node

## Async Pattern

### callback pattern

### promise pattern

### async / await

error handling:
  - try ... catch
  - return an array whose first element is the error

## Error Handling

Any thrown or unhandled errors will cause the process to crash and exit.

Your app may have some errors that should not cause a crash, so you must handle accordingly.

## Servers

### Server vs Client

Every client has the its own client instance. But they share the same server instance.

A server's job is to handle requests from some sort of client (browser, mobile app, another server, etc).

Without considering scaling, one server instance will handle many client requests. Compared to a client app where that code only care about itself on that host machine.

NodeJs has built-in and community packages to build all kinds of servers (API's, static, realtime, etc).

