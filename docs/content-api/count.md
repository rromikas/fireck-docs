---
sidebar_position: 5
---

# Count

To get the number of documents in the collection send a GET request to /api/_collection_id_/count. Example:

**GET** `/api/restaurants/count`

**headers** (if absent, your role is _public_):

```json
{
	"Authorization": "Bearer " + token
}
```

**Response**

```json
147
```
