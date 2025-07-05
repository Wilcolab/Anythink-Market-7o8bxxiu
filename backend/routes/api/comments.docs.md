# Comments API Documentation

Base URL: `/api/comments`

## Endpoints

### Create a Comment
- **POST** `/`
- **Body:** JSON object representing the comment fields (see Comment model)
- **Response:** 201 Created, returns the created comment object
- **Errors:** 400 Bad Request

### Get All Comments
- **GET** `/`
- **Response:** 200 OK, returns an array of all comments
- **Errors:** 500 Internal Server Error

### Get a Comment by ID
- **GET** `/:id`
- **Params:**
  - `id` (string): Comment ID
- **Response:** 200 OK, returns the comment object
- **Errors:** 404 Not Found, 500 Internal Server Error

### Update a Comment by ID
- **PUT** `/:id`
- **Params:**
  - `id` (string): Comment ID
- **Body:** JSON object with fields to update
- **Response:** 200 OK, returns the updated comment object
- **Errors:** 404 Not Found, 400 Bad Request

### Delete a Comment by ID
- **DELETE** `/:id`
- **Params:**
  - `id` (string): Comment ID
- **Response:** 200 OK, `{ message: "Comment deleted" }`
- **Errors:** 404 Not Found, 500 Internal Server Error

## Example Request Bodies

```
POST /api/comments
{
  "body": "This is a comment.",
  "author": "userId",
  "item": "itemId"
}
```

## Notes
- All endpoints return JSON.
- Error responses include an `error` field with a message.
- The Comment model fields may include `body`, `author`, `item`, and timestamps, depending on your schema.
