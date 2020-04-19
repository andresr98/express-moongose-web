# Basic express server with moongose connection


## Development server

Run `npm install` to install external dependencies, later run `cd customer-serivce`, one more time run `npm install` to install internal dependencies and finally run `npm start` to start development server.

# Documentación

## Modulos

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
updateStudentById | Actualizar un Student de la BD por su identificador 
deleteStudentById | Eliminar un Student de la BD por su identificador
updateStudents | Actualizar todos los Student que cumplan un críterio y los campos enviados por parámetros 
getAverage | Obtener el promedio de nota de los Student asociados a un curso. 