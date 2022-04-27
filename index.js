const { ipcRenderer } = require('electron')

let mylist;
let id;
let Nombres;

let Apellidos;
let estado;
let tipo;
let btnform;
let btnUpdate;
let btndelete;
let btnedit;


window.onload = function() { 
   
   mylist = document.getElementById("mylist") 
   btnform = document.getElementById("btnform")
   btnUpdate = document.getElementById("btnUpdate")
   id = document.getElementById("id")
   Nombres = document.getElementById("Nombres")
   Apellidos = document.getElementById("Apellidos")
  
   estado = document.getElementById("estado")
   tipo = document.getElementById("tipo")
   btnform.onclick = renderAdduser
   btnUpdate.onclick = renderUpdateuser
   rendergetgymnasio() 
};


async function rendergetgymnasio() 
{
   await ipcRenderer.invoke('get')   
}

async function renderAdduser() 
{
   const obj = {
      Nombres:Nombres.value,
      Apellidos:Apellidos.value,
    
      estado:estado.value,
      tipo:tipo.value,
      
   }
   Nombres.value = ""
   Apellidos.value = ""
   
   estado.value = ""
   tipo.value = ""
   await ipcRenderer.invoke('add', obj)  
  
   new Notification('user', {
      body: 'added user'
    })
}


ipcRenderer.on('gymnasio', (event, results) => {  
   let template = ""
   const list = results
   list.forEach(element => {
      template+=`
         <tr>
            <td>${element.Nombres}</td>
            <td>${element.Apellidos}</td>
          
            <td>${element.estado}</td>
            <td>${element.tipo}</td>
            <td>
              <button class="btn btn-danger"
                value="${element.id}"
                > 
                delete
              </button>
             </td>
             
             <td>
               <button class="btn btn-info"   
                 id="btnedit"
                 value="${element.id}"> 
                edit
              </button>
           
            </td>
         </tr>
      ` 
   });
     
   mylist.innerHTML = template 
   btndelete = document.querySelectorAll(".btn-danger")
   btndelete.forEach(boton =>{
     boton.addEventListener("click" , renderdeleteuser)
  })

 btnedit = document.querySelectorAll(".btn-info")
 btnedit.forEach(boton =>{
    boton.addEventListener("click" , rendergetuser)
 })

});


async function renderdeleteuser(e)
{
  
   const obj = { id:parseInt(e.target.value)}
   await ipcRenderer.invoke('remove_user', obj)    
}

async function rendergetuser(e)
{
   const obj = { id: parseInt(e.target.value)}
   await ipcRenderer.invoke("get_one" , obj)

}

ipcRenderer.on('user', (event, result) => {
   id.value = result.id
   Nombres.value = result.Nombres
   Apellidos.value = result.Apellidos

   estado.value = result.estado
   tipo.value = result.tipo
});

async function renderUpdateuser()
{
  const obj = {
     id: id.value,
     Nombres: Nombres.value,
     Apellidos: Apellidos.value, 

     estado: estado.value,
     tipo: tipo.value,
  }

  clearinput()
  await ipcRenderer.invoke("update" , obj)
}

function clearinput()
{
   id.value =""
   Nombres.value = ""
   Apellidos.value = ""
  
   estado.value = ""
   tipo.value = ""
}

