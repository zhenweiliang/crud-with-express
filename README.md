##Tasks:
- step one: define the router/api
- step two: app.js - install libs, mount middleware and router
- step three: crud.js - based on router
- step four: page by page coding

##Libs:
- body-parser for POST request
- art-template for templating rendering
- bootstrap for styling




# Router

| Request Method | Path             | Get Parameter | post Parameter                 | Desc                   |
| -------------- | ---------------- | ------------- | ------------------------------ | ---------------------- |
| GET            | /students        |               |                                | Main Page              |
| GET            | /students/new    |               |                                | Add Student Page       |
| POST           | /students/new     |               | name、age、gender、hobbies     | Add Student Request    |
| GET            | /students/edit   | id            |                                | Edit Student Page      |
| POST           | /students/edit    |               | id、name、age、gender、hobbies | Edit Student Request   |
| GET            | /students/delete | id            |                                | Delete Student Request |
|                |                  |               |                                |                        |
