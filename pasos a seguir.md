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
cambiamos los alert del por los notifications controller y en los js principales

cremamos un spinner controller y view para usarlo en todas las vistas de html
podemos en este caso "saltarnos" el modelo vista controlador y no acoplar los distintos
controladores a traves del controlador principal
si hacer un controlador dependiente de otro el nodo tiene que estar dentro del nodo 
que es controlado, sino tenemos que ir a document

si te sale undefines y estan todos los selectores bien
ES QUE NO HAS PUESTO EL RETURN EN ALGUNA FUNCION COMO EN EL VIEW!!!

construimos un controlador de logeado que tenga botones de cerrar sesion o de login y registro
que nos lleven a sus respectivas paginas

añadimos un minimo css y un devolver un mensaje cuando la lista de anuncios esta vacia

nos ponemos con el detalle
para conseguir los datos que enviamos desde la url
const params=  new URLSearchParams(window.location.search);
   const adId = params.get('adId');

don el params.get(es el nombre que le hemos puesto a enviar a la variable en VIEW de los ads
que es donde conseguimos los datos desde la base de datos) 

importante controlar que no entren de manera manual  si entrar sin parametro lo devolvemos a
la pagina de index

colocar un boton de volver atras en los detalles del anuncio

crear un MVC para crear anuncios


creado pero falta ver com meter el author, meter el spinner evitar que se metan en la web
si no estan logeados

de momento creo un author a la espera de que me de tiempo  a decodificar el jwt