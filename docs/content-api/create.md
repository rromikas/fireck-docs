---
sidebar_position: 2
---

# Create

To add a new document to a collection, send a POST request to /api/_collection_id_ with the body containing all the document details, example:

**POST** `/api/restaurants`

**headers** (if absent, your role is _public_):

```json
{
	"Authorization": "Bearer " + token
}
```

**body**

```json
{
	"title": "Talluti";
	"street_address": "190 White avenue"
}
```

**Successful request returns**

```json
{
	"title": "Talluti";
	"street_address": "190 White avenue"
}
```
