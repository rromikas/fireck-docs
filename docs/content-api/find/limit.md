---
sidebar_position: 4
---

# Limit

Set **limit** query parameter to limit how many documents firestore should return. Example:

**GET** `/api/restaurants?orderBy=rating,desc&limit=20`

Gets top 20 restaurants evaluated by rating

**Response**

```json
[
	{
		"title":  "Italiano",
		"street_address":  "179 Alpha Avenue",
		"rating":  4.6
	},
	{
		"title":  "DinnerInn",
		"street_address":  "3752 Coventry Court",
		"rating":  4.4
	}
	{
		"title":  "Mexicano",
		"street_address":  "2143 Rodney Street",
		"rating":  4.3
	},

	...17 documents more...

]
```
