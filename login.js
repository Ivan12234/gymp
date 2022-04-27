const { ipcRenderer } = require('electron')

let btnlogin;
let correo; 
let contraseña;

window.onload = function() { 
  correo = document.getElementById("correo")
  contraseña = document.getElementById("contraseña")
  btnlogin = document.getElementById("login")

  btnlogin.onclick = function(){
    
   const obj = {correo:correo.value, contraseña:contraseña.value }

    ipcRenderer.invoke("login", obj)
  }
}