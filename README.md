# Basic express server with moongose connection


## Development server

Run `npm install` to install external dependencies, later run `cd customer-serivce`, one more time run `npm install` to install internal dependencies and finally run `npm start` to start development server.

# Documentación

## Modulo

Se genera dentro de la carpeta modules, la subcarpeta `student`. Se sigue la convención de trabajar por capas con Node.js y se genera el archivo `student.module.js` donde se exportan las rutas a los archivos necesarios para quee funcione el componente.

## Modelo

Se crea el siguiente schema en MongoDB con el ODM Moongose, y se expone dentro del archivo `student.model.js`:

``` JS
{
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cel: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    course: {
        type: Number,
        required: true
    },
    grade: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}
``` 

## Servicio

Una vez implementado el modelo, se crea la capa de servicio en el archivo `student.service.js`, donde se exponen las siguientes funciones:

Función | Utilidad
-------------- | ---------
createStudent | Crear un nuevo registro de student en la BD.
getAllStudents | Obtener una colección de todos los Student en la BD.
getStudentById | Obtener un Student de la BD por su identificador.
updateStudentById | Actualizar un Student de la BD por su identificador. 
deleteStudentById | Eliminar un Student de la BD por su identificador.
updateStudents | Actualizar todos los Student que cumplan un críterio y los campos enviados por parámetros. 
getAverage | Obtener el promedio de nota de los Student asociados a un curso.

## Middleware

La siguiente capa a desarrolar es la del middleware para tomar la petición y convertirla en los parámetros que necesita la capa de servicio. Dicho middleware es construido en el archivo `student.middleware.js`, donde se exponen las siguientes:

Función | Utilidad
-------------- | ---------
createStudent | Tomar de la petición el body y enviarlo al servicio para crear un nuevo Student.
getAllStudents | Invocar la capa de servicio para obtener los Student.
getStudentById | Tomar el Identificador pasado como Path param en la url y enviarlo al servicio para obtener un Student.
updateStudentById |  Tomar el Identificador pasado como Path param en la url y el body de la petición para invocar el servicio pasando como parámetro el id y los campos a actualizar.
deleteStudentById | Tomar el Identificador pasado como Path param en la url e invocar el servicio para borrar un Student.
updateStudents | Tomar los objetos filters y student del body de la petición y pasarlos al servicio como filters y campos actualizar respectivamente.
getAverage | Tomar el número del curso pasado como Query param, invocar el servicio para obtener los Student en dicho curso, iterar en los registros y retornar el promedio.

## Controller

Finalmente se genera la capa controladora, donde se dirigen las peticiones según la necesidad del cliente. Se implementa la lógica en el archivo `student.controller.js` según la siguiente tabla:

Ruta | Método HTTP | Utilidad 
---- | ----------- | --------
/ | GET | Obtener todos los Student.
/ | POST | Crear un nuevo Student.
/ | PUT | Actualizar varios Student según filtros.
/:studentId | GET | Obtener un Student por su identificador.
/:studentId | PUT | Actualizar un Student por su identificador.
/:studentId | DELETE | Eliminar un Student por su identificador.
/average | GET | Obtener el promedio de nota de los Student en un curso enviado como Path Param.

# End Points

## http://localhost:3000/students 

### Método HTTP 
GET

### Parámetros
Ninguno

### Respuesta

``` js
[
    {
        "_id": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "cel": "string",
        "address": "string",
        "course": 0,
        "grade": 1,
        "__v": 0
    }
]
```

## http://localhost:3000/students 

### Método HTTP 
POST

### Parámetros
En el body de la péticion:
``` js{
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "cel": "string",
    "address": "string",
    "course": 0,
    "grade": 1
}
```
### Respuesta

``` js
{
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "cel": "string",
    "address": "string",
    "course": 0,
    "grade": 1
}
```

## http://localhost:3000/students 

### Método HTTP 
PUT

### Parámetros
En el body de la péticion:
``` js {
    "filters": {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "cel": "string",
        "address": "string",
        "course": 0,
        "grade": 1
    }, student: {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "cel": "string",
        "address": "string",
        "course": 0,
        "grade": 1
    }
}
```
Donde en filetr cualquier valor puede ser omitido y en student, valor que se omita indica que no se actualizará dicho campo. 

### Respuesta

``` js
{
    "modified": 0
}
```

## http://localhost:3000/students/{studentID}

### Método HTTP 
GET

### Parámetros
En la URL se recibe el identificador de un Student.

### Respuesta

``` js
{
    "_id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "cel": "string",
    "address": "string",
    "course": 0,
    "grade": 1,
    "__v": 0
}
```

## http://localhost:3000/students/{studentID}

### Método HTTP 
PUT

### Parámetros
En la URL se recibe el identificador de un Student y en el body:
``` js
{
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "cel": "string",
    "address": "string",
    "course": 0,
    "grade": 1,
}
```
Donde cada campo omitido indica que no se actualizará.

### Respuesta

``` js
{
    "_id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "cel": "string",
    "address": "string",
    "course": 0,
    "grade": 1,
    "__v": 0
}
```

## http://localhost:3000/students/{studentID}

### Método HTTP 
DELETE

### Parámetros
En la URL se recibe el identificador de un Student.

### Respuesta

``` js
{
    "_id": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "cel": "string",
    "address": "string",
    "course": 0,
    "grade": 1,
    "__v": 0
}
```

## http://localhost:3000/students/average?course=?

### Método HTTP 
GET

### Parámetros
En la URL se recibe por query param el número de un curso

### Respuesta

``` js
{
    "num_student": 0,
    "average": 0.0
}
```