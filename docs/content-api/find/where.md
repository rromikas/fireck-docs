---
sidebar_position: 2
---

# Where

Filtering documents is possible by adding the query parameter **where**. where parameter value can be multiple filters separated by a semicolon (“;”). One filter consists of 3 parts: field, operator and value. The parts are separated by a comma (“,”). Fireck supports all [firestore operators](https://firebase.google.com/docs/firestore/query-data/queries#query_operators). Example:

**GET** `/api/restaurants?where=rating,>,4.2;title,<,T`

Gets all restaurants with the rating higher than 4.2 and the first letter of the title not further than ‘T’ alphabetically.

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

## In, not in, array-contains-any

When you use **not in**, **in**, **array-contains-any** operators you want to set more than one value as a filter value. To do so, just write all values separated by commas. It is possible because field and operators always are the first two filter parts. What's left is the value. Example:

**GET** `/api/restaurants?where=cuisine,in,chinese,korean,american`

Gets all restaurants with the cuisine which is either chinese, korean or american.

**Response**

```json
[
  {
    "title": "Chinese Inn",
    "street_address": "1000 Gerald L. Bates Drive",
    "cuisine": "chinese"
  },

  {
    "title": "American Pizza",
    "street_address": "4425 Public Works Drive",
    "cuisine": "american"
  },

  {
    "title": "Dinner Inn",
    "street_address": "3752 Coventry Court",
    "cuisine": "korean"
  }
]
```

## Caution

Applying multiple filters on different fields requires creating the firestore [composite index](https://firebase.google.com/docs/firestore/query-data/index-overview#composite_indexes) before.
