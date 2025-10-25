# XML Prompting Example

<div class="mt-8">

```xml
<context>
  We have an existing todo list app with Node.js and Express.
  Current routes: GET /api/todos and POST /api/todos
  We use PostgreSQL with a todos table (id, title, description)
</context>

<step-1>
  Add a new DELETE /api/todos/:id endpoint that removes
  a todo by its ID from the database
</step-1>

<step-2>
  Return 404 if the todo doesn't exist, otherwise return
  204 No Content on successful deletion
</step-2>

<step-3>
  Add error handling for database errors and log them
</step-3>
```

</div>
