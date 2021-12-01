---
sidebar_position: 1
---

# Find

To get documents from a collection, send a GET request to /api/_collection_id_. The endpoint returns up to 10 documents if a higher limit is not set. Read more about [limit](/content-api/find/limit). Example:

**GET** `/api/restaurants`

**headers** (if absent, your role is _public_):

```json
{
	"Authorization": "Bearer " + token
}
```

**Response**

```json
[
  {
    "docId": "S0OdrL7n9jfIIcRxIvgG",
    "title": "Mexicano",
    "street_address": "2143  Rodney Street"
  },
  {
    "docId": "fy0WmDJFaCF9kSbNeOoi",
    "title": "Talluti",
    "street_address": "190 White avenue"
  },
  {
    "docId": "llj6rUoZqXcpl1KWjkRP",
    "title": "Italiano",
    "street_address": "179  Alpha Avenue"
  }
]
```
