const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path'); 
let db = require('./database')



let win;
let winlogin;
function createWindow () {
   win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
    
      preload:path.join(__dirname, 'index.js')
      
    }
  })

  win.loadFile('index.html')
}

function loginWindow () {
  winlogin = new BrowserWindow({
   width: 600,
   height: 500,
   autoHideMenuBar: true,
   frame:false,
   webPreferences: {
  
     preload:path.join(__dirname, 'login.js')
     
   }
 })

 winlogin.loadFile('login.html')
}



app.whenReady().then(loginWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.handle('login', (event, obj) => {
  validatelogin(obj)
});



function validatelogin(obj) {
 const { correo, contraseña } = obj 
 const sql = "SELECT * FROM user WHERE correo=? AND contraseña=?"
  db.query(sql, [correo, contraseña], (error, results, fields) => {
    if(error){ console.log(error);}

    if(results.length > 0){
       createWindow ()
       win.show()
       winlogin.close()
     }else{
       new Notification({
         title:"login",
         body: 'correo o contraseña equivocado'
       }).show()
     }
    
  });
}




ipcMain.handle('get', () => {
   getgymnasio()
});


ipcMain.handle('add', (event, obj) => {
  adduser(obj)
});


ipcMain.handle('get_one', (event, obj) => {
  getuser(obj)    
});


ipcMain.handle('remove_user', (event, obj) => {
  deleteuser(obj)
});


ipcMain.handle('update', (event, obj) => {
  updateuser(obj)    
});



function getgymnasio()
{
  
  db.query('SELECT * FROM user', (error, results, fields) => {
    if (error){
      console.log(error);
    }
    
    win.webContents.send('gymnasio', results)
  });  
}


function adduser(obj)
{
  const sql = "INSERT INTO user SET ?";  
  db.query(sql, obj, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getgymnasio()  
 });
}


function deleteuser(obj)
{
  const { id }  = obj
  const sql = "DELETE FROM user WHERE id = ?"
  db.query(sql, id, (error, results, fields) => {
    if(error) {
       console.log(error);
    }
    getgymnasio()  
  });
}


function getuser(obj)
{
  let { id } = obj 
  let sql = "SELECT * FROM user WHERE id = ?"
  db.query(sql, id, (error, results, fields) => {
    if (error){
      console.log(error);
    }
    console.log(results)
    win.webContents.send('user', results[0])
  });
}


function updateuser(obj) 
{
   let { id, Nombres, Apellidos, correo, contraseña, estado, tipo } = obj
   const sql = "UPDATE user SET Nombres=?, Apellidos=?,  estado=?, tipo=? WHERE id=?";  
   db.query(sql, [Nombres, Apellidos, estado, tipo, id], (error, results, fields) => {
     if(error) {
        console.log(error);
     }
     getgymnasio()  
   });
}




