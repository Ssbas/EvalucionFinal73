var Usuario = require('./modelUsuarios.js')

module.exports.crearUsuariosebas = function(callback){
  var arr = [{ email: 'sebas@mail.com', user: "sebas", password: "123456"}, { email: 'luis@mail.com', user: "luis", password: "123456"}];
  Usuario.insertMany(arr, function(error, docs) {
    if (error){
      if (error.code == 11000){
        callback("Utilice los siguientes datos: </br>usuario: sebas | password:123456 </br>usuario: luis | password:123456")
        callback(error.message)
      }
    }else{
      callback(null, "El usuario 'sebas' y 'luis' se ha registrado correctamente. </br>usuario: sebas | password:123456 </br >usuario: luis | password:123456")
  });
}
