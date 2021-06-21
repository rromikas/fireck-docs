---
sidebar_position: 3
---

# Order by

Sorting documents firestore uses **orderBy** method. Use the query paramater of the same name to get ordered documents in the API request. Query parameter **orderBy** value is the field you want to order your documents by. Optionally you can add order direction - **asc** or **desc** (default is asc). Separate the field and direction by a comma. Example:

**GET** `/api/restaurants?orderBy=rating,desc`

Gets restaurants ordered by rating in a descending order.

**Response**

```json
[
  {
    "title": "Mexicano",
    "street_address": "2143 Rodney Street",
    "rating": 4.3
  },
  {
    "title": "Italiano",
    "street_address": "179 Alpha Avenue",
    "rating": 4.6
  },
  {
    "title": "DinnerInn",
    "street_address": "3752 Coventry Court",
    "rating": 4.4
  }
]
```
