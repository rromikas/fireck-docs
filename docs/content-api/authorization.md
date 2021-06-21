---
sidebar_position: 1
---

# Authorization

Fireck uses a roles system which defines permissions for different roles. To find out if you have permission to find, create or update the collection, fireck needs to know your role. Fireck can find your role from the **token** you receive after **authentication**. Fireck has two default roles: Public and Authenticated. Public role defines permission for guest users, authenticated - for those who have an account and are logged in. Therefore you should know how to create a user first.

## Register a user

To register a user, send a POST request to /auth/local/register with the body which contains email and password, example:

**POST** `/auth/local/register`

Body:

```json
{
  "email": "example@example.com",
  "password": "password123"
}
```

Successful response:

```json
{
  "success": true
}
```

## Login

To login, send a POST request to /auth/local/login with the body which contains email and password, example:

**POST** `/auth/local/login`

Body:

```json
{
  "email": "example@example.com",
  "password": "password123"
}
```

Successful response:

```json
{
	"token": string,
	"user":{
		"email":string
	}
}
```

## Authorized requests

To send authorized request, add the Authorization header to the request:

`Authorization: “Bearer “ + token`

If authorization header is not provided, the sender role is _public_
