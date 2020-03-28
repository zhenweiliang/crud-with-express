## Three ways for permanent data storage
- Default - Json: router.js,crud.js
- Mongodb: router_mongo.js,crud_mongo.js
- Myqld: router_mysql.js,crud_mysql.js 

``CREATE TABLE `student` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` char(255) DEFAULT NULL,
   `age` int(11) DEFAULT NULL,
   `gender` int(11) DEFAULT NULL,
   `hobbies` char(255) DEFAULT NULL,
    PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;`

## Tasks:
- step one: define the router/api
- step two: app.js - install libs, mount middleware and router
- step three: crud.js - based on router
- step four:  router coding

## Libs:
- body-parser for POST request
- art-template for templating rendering
- bootstrap for responsive styling




# Router

| Request Method | Path             | Get Parameter | post Parameter                 | Desc                   |
| -------------- | ---------------- | ------------- | ------------------------------ | ---------------------- |
| GET            | /       |               |                                | Main Page              |
| GET            | /students/new    |               |                                | Add Student Page       |
| POST           | /students/new     |               | name、age、gender、hobbies     | Add Student Request    |
| GET            | /students/edit   | id            |                                | Edit Student Page      |
| POST           | /students/edit    |               | id、name、age、gender、hobbies | Edit Student Request   |
| GET            | /students/delete | id            |                                | Delete Student Request |
|                |                  |               |                                |                        |
