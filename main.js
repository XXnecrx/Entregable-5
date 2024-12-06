function validaFormulario(){
    let Nombre=document.getElementById("Usuario").value;
    let Email=document.getElementById("Correo").value;
    let Clave=document.getElementById("Contraseña").value;
    let Numero=document.getElementById("Telefono").value;
    if (Nombre == ""){
        alert("Error: Porfavor escriba el usuario! ")
        return false;
    }if (Email == ""){
        alert("Error: Porfavor escriba el Correo! ")
        return false;
    }if (Clave == ""){
        alert("Error: Porfavor escriba la Contraseña! ")
        return false;
    }if (Numero == ""){
        alert("Error: Porfavor escriba el Numero! ")
        return false;
    }
}