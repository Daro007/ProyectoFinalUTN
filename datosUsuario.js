// Captacion de datos de usuario para News Letter ficticia.

function datosUsuario() {
  const emailList = [];
  const _nombre = prompt(
    "Para registrate a nuestra News Letter ingresa tu nombre",
    ""
  );
  const _email = prompt("Ingrese su E-mail por favor", "");

  const usuario = {
    nombre: _nombre,
    email: _email
  };
  emailList.push(usuario);
  console.log(usuario);
  console.log(emailList);
}
