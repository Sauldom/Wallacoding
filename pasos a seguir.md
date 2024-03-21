acordarse del fichero .json con la base de datos de los anuncios

anuncio vacio notificar
ruleta de carga
pintar anuncios


anuncio
foto
nombre 
descripcion 
precio
compra o venta

la foto un input del tipo texto el hosting de imagenes

la paginacion y ordenacion habria que leerse la docu de sparrest

Los endpoints son URLs específicas que representan recursos o funciones disponibles en un servicio web o API (Interfaz de Programación de Aplicaciones), endpoints privados y publicos dale una vuelta

cremos un mvc de los anuncios
creamos unos anuncios en la base de datos
comprobamos su funcionamiento

creamos un main js donde lo linkamos al html para que inicie los controladores
en principio solo el ads controller

preguntar a eduardo sobre el true o false con un operador ternario

acordarse que una referencia a una funcions ehace sin los parentesis que seria
ejecutar esa funcion
renombra las variables con f2 y te las cambia en todo el documento

a la hora de implementar el controlador de notificaciones me decia que no era una funcion cuando parecia
que estaba todo bien
pues resulta que el return de notificacition controller no tenia una letra igual que la funcion
que retornabamos

en este paso de momento funcionan las notificaciones y se ven los anuncios


nos metemos con el registro de usuarios creamos un archivo html de sign up
de momento no le hemos puesto ningun enlace al main sino el html solo
creamos un archivo signup.js que es el que se encarga del nodo y lo envia al controlador

creamos un controlador y un modelo
en el html creamos un formulario y luego lo validamos en el controlador

la parte importante del modelo es conseguir los datos que lo hacemos con la expresion
const response = await fetch('http://localhost:8000/auth/register', {
      method: "POST",
      body: JSON.stringify({ username: email, password: password }),
      headers: {
        'Content-type': "application/json"
      }
    });
un fetch que le decimos el metodo, en el body lo que queremos y los headers para que sepa
que tipo de contenido es
asi que primero validamos todos los datos del formulario y luego ya lo enviamos con el modelo

creamos una pagina de registro de usuarios con sus validacions

creamos una pagina de login de usuarios

document.addEventListener('DOMContentLoaded' accedemos al DOm cuando ya estan todos los contenidos cargados

añadir un trigger event para poder utilizarlo como creador de eventos
cambiamos los alert del por los notifications controller y en los js princip
