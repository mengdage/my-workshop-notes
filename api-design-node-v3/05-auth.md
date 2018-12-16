# Auth basics

tdlr: You can never truely protect an API, but requiring Authentication makes it a bit safer.

- Authentication is controlling if an incoming request can proceed or not.
- Authorization is controlling if an authenticated request has the correct permission to access a resource.
- Identification is determing who the requester is.

## JWT authentication

tldr: tokens passed every request to check auth on the server.
Instead of keep session info on the server (stateful), check auth on every request (stateless).

- A bearer token strategy that allows the API to be stateless with user auth.
- Created by a combination of secrets on the API and a payload like a user object.
- Must be sent with every request where the API try to verify the token was created with the expected secret.
- After seccessful verification, JWT payload can be accessible to the server. Can be used to authorization and identification.
