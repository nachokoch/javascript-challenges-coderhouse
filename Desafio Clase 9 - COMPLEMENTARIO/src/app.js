// Clase Publicacion

class Publicacion {
    
        constructor (titulo, contenido) {
            this.titulo = titulo;
            this.contenido = contenido;
        }
        
    
}

let publicaciones = [];


const validarFormulario = (e) => {

    e.preventDefault (); 
   
    alert("Publicacion creada");
   
    let titulo = formulario.children[1].value;
    
    let contenido = formulario.children[3].value; 
    
    let publicacion = new Publicacion (titulo, contenido)

    publicaciones.push(publicacion)
   
   }

let miFormulario = document.getElementById ("formulario");

miFormulario.addEventListener ("submit", validarFormulario );


let boton = document.getElementById("boton");

const printear = () => {
    for (let publicacion of publicaciones) {
        let contenedor = document.createElement("div"); 
        contenedor.innerHTML = `<h2>${publicacion.titulo}</h2>
                                <p>${publicacion.contenido}</p>`
        document.body.appendChild(contenedor);
    }
}

boton.onclick = () => {
    printear()
}








