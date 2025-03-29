const usuarios = [
  {
    usuario: "Ruben",
    clave: "contraseña123"
  },
  {
    usuario: "Daniela",
    clave: "password2023"
  },
  {
    usuario: "Joe",
    clave: "guest"
  },
  {
      usuario: "Carlos",
      clave: "guest"
  }
];


document.getElementById("boton").addEventListener("submit", function(event) {
  event.preventDefault();
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const usuarioEncontrado = usuarios.find((usuario) => usuario.usuario === usuario && usuario.clave === clave);
  
  if (usuarioEncontrado) {
    alert("Bienvenido " + usuarioEncontrado.usuario);
    window.location.href = "index.html";
  } else {
    alert("Usuario no encontrado");
  }
});
