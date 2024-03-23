
export const drawNotLogged = ()=>{
    return `<ul>
    <li>
      <a href="./login.html">Iniciar sesion</a>
      <a href="./signup.html">Registro nuevo usuario</a>
    </li>
  </ul>`;
}

export const drawLogged = ()=>{
    return `<button>Cerrar sesión</button> <a class="link-create-ad"href="./create-ad.html">Crear anuncio</a>`
}
