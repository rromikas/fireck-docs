---
sidebar_position: 6
---

# Update

To update a document send a POST request to /api/_collection_id_/_document_id_ with a body containing the updates. Example:

**PUT** `/api/restaurants/1dhdHhlqZpWP5LzzaZQN`

**headers** (if absent, your role is _public_):

```json
{
    "Authorization": "Bearer "  +  token
}
```

**body**

```json
{
  "title": "American Pizza And Burgers"
}
```

**Response**

```json
{
  "title": "American Pizza And Burgers",
  "docId": "1dhdHhlqZpWP5LzzaZQN",
  "rating": 4.2
}
```
