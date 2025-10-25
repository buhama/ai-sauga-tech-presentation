---
layout: default
---

# XML Prompting Example

<div class="mt-4">

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

<style>
h1 {
  background: linear-gradient(135deg, #FDB913 0%, #FFCD00 50%, #F7A600 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.slidev-layout {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
}

pre {
  font-size: 0.85rem !important;
  line-height: 1.5 !important;
  margin-top: 0 !important;
}

code {
  font-size: 0.85rem !important;
}
</style>
