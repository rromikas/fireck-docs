---
sidebar_position: 7
---

# Delete

To delete the document send a DELETE request to /api/_collection_id_/_document_id_. Example:

**DELETE** `/api/collection_id/document_id`

**headers** (if absent, your role is _public_):

```json
{
	"Authorization": "Bearer "  +  token
}
```

**Successful response**

```json
{
  "success": true
}
```
