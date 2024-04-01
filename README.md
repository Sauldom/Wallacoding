# Wallacoding



## Corregido 
* Si introduzco credenciales erróneas en el formulario de login, no informas al usuario.
* Para acceder al detalle del anuncio, sólo puedo hacerlo si hago click en la imagen. Por tanto, si creo un producto sin imagen, no puedo acceder al detalle
* No puedo borrar un anuncio que he creado.


## En el fichero pasos a seguir

He puesto un poco el camino que he seguido y algunos recordatorios para cuando revisite el codigo
He tenido el tiempo un poco justo y me ha costado bastante armar el esqueleto por lo que el css es una basura la verdad
Me ha costado empezar pero luego creo que he pillado mejor el MVC pero aun así me  han dado guerra algunas validaciones
olvidarme de algun .js, algunos datos que no se cargaban correctamente y he perdido mucho tiempo en esas tonterias
por lo demas aqui lo tienes, creo que la parte principal lo cumple pero darme tiempo a investigar mas no creo
al menos para la entrega, aunque alomejor me animo esta semana a darle una vuelta.


# Funcionalidades del API

## Listado de Anuncios

    Muestra una lista de anuncios con su imagen (si está disponible), nombre, descripción, precio y si está en venta o compra. 

    Gestiona los estados de interfaz: vacío (sin anuncios), error (al cargar los anuncios), carga (mientras se cargan los anuncios) y éxito (anuncios listos para mostrar).

    Al hacer clic en la foto del anuncio, se redirige a la pantalla de detalle del anuncio.

## Detalle de Anuncio

    Muestra detalles de un anuncio: foto (si está disponible), nombre, descripción, precio y si está en compra o venta.

    Gestiona los estados de interfaz: vacío (anuncio no encontrado), error (al cargar la información del anuncio), carga (mientras se carga la información del anuncio) y éxito (información del anuncio lista para mostrar).

    Si el usuario está autenticado y el anuncio le pertenece, se muestra un botón para eliminar el anuncio (se confirma con el usuario antes de eliminar).

## Creación de Anuncio

    Muestra un formulario para crear un anuncio con campos como foto (opcional), nombre, descripción, precio y tipo (compra/venta).

    Gestiona los estados de interfaz: error (al guardar el anuncio), carga (mientras se guarda el anuncio) y éxito (anuncio guardado correctamente).

    Requiere autenticación para acceder. En caso contrario, se redirige a la página de listado de anuncios.

# Login

    Muestra un formulario para ingresar nombre de usuario y contraseña.

    Autentica al usuario contra el backend para obtener un token JWT para futuras comunicaciones.

# Registro

    Muestra un formulario para registrar un nuevo usuario con nombre de usuario y contraseña.

    Registra al usuario en el backend.

