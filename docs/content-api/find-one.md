---
sidebar_position: 4
---

# Find one

If you know the _document id_, you can get that document from the collection by sending a GET request to /api/_collection_id_/_document_id_. Example:

**GET** `/api/restaurants/1dhdHhlqZpWP5LzzaZQN`

**headers** (if absent, your role is _public_):

```json
{
	"Authorization": "Bearer "  +  token
}
```

**Response**

```json
{
  "docId": "1dhdHhlqZpWP5LzzaZQN",
  "title": "American Pizza",
  "rating": 4.2
}
```
