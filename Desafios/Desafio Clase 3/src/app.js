const INTENTOS_MAXIMOS = 3
const PASSWORD = "admin"
let intentosUsuario = 0;

alert("Bienvenido a su panel de control.")
let passwordUsuario = prompt("Por favor ingrese la contraseña. (Test: admin)")
if(passwordUsuario === PASSWORD){
    alert("Te logueaste exitosamente")
}else{
    while (INTENTOS_MAXIMOS > intentosUsuario && passwordUsuario != PASSWORD){                    
        if(passwordUsuario != PASSWORD){        
            intentosUsuario++;
            alert("Contraseña incorrecta")
            passwordUsuario = prompt(`Por favor ingrese nuevamente la contraseña. Intentos restantes: ${(INTENTOS_MAXIMOS + 1) - intentosUsuario}`)
        }else{
            alert("Te logueaste exitosamente.")
        }
    }
}
