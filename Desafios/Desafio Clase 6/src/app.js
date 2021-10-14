// VARIABLES GLOBALES

const INTENTOS_MAXIMOS = 3
const PASSWORD = "admin"
let intentosUsuario = 0;

// DECLARACION DE FUNCIONES

// LOGUEO

let bienvenidaLogueo = (profesor) => {
    alert(`Bienvenido al Sistema de Promedios ${profesor}.`)
let passwordUsuario = prompt(`Por favor ingrese la contraseña. (Test: admin)`)
if(passwordUsuario === PASSWORD){
    alert(`Te logueaste exitosamente ${profesor}`)
}else{
    while (INTENTOS_MAXIMOS > intentosUsuario && passwordUsuario != PASSWORD){                    
        if(passwordUsuario != PASSWORD){        
            intentosUsuario++;
            alert(`Contraseña incorrecta`)
            passwordUsuario = prompt(`Por favor ingrese nuevamente la contraseña. Intentos restantes: ${(INTENTOS_MAXIMOS + 1) - intentosUsuario}`)
        }else{
            alert("Te logueaste exitosamente.")
        }
    }
}
}

// CLASE "CLASE" 

class Clase {
    constructor (cantidadAlumnos, examenes, camada, profesorTitular) {
        this.cantidadAlumnos = cantidadAlumnos;
        this.camada = camada;
        this.profesorTitular = profesorTitular;
        this.examenes = examenes;               
        this.comenzada = false;
    }

    comenzarClase() {
        this.comenzada = true;
    }


}

// CLASE "ALUMNO"

// CLASE "CLASE" 

class Alumno {
    constructor ({nombre, promedio}) {
        this.nombre = nombre;
        this.promedio = promedio;     
    }
}

// PROMEDIO - Funcion auxiliar de procesarAlumnos

const sacarPromedio = (acumulador, examenes ) => {
    return (acumulador/examenes);
}

// ANUNCIO MEJOR ALUMNO - Funcion auxiliar de procesarAlumnos

const anunciarMejorAlumno = (alumno, promedio) => {
    alert(`El alumno con el mejor promedio es ${alumno} con ${promedio}`)
}

// ORDENAR ARRAY POR PROMEDIOS DE MENOR A MAYOR

const ordenarListaAlumnos = (alumnos) => {
    alumnos.sort((a, b) => parseFloat(a.promedio) - parseFloat(b.promedio));
}


// MOSTRAR TODOS LOS ALUMNOS Y SUS CALIFICACIONES.

const mostrarAlumnos = (alumnos) => {
    alert(`Listado de alumnos y sus respectivos promedios, de menor a mayor: ${JSON.stringify(alumnos)}`)
}


// CREACION DE ARRAY 

let listaAlumnos = [];

// PROCESAR ALUMNOS 

const procesarAlumnos = ( obj )=> {
    let mejorPromedio = 0;
    let alumnoMejorPromedio = "Nadie"
    alert(`Se detectaron ${obj.cantidadAlumnos} de alumnos en el curso, cada uno con ${obj.examenes} examenes tomados.`)
    if(obj.comenzada === false){
        alert("No se puede realizar el procesamiento ya que la clase no ha comenzado (Clase.comenzada === false)")
    }else{
        for (let i = 0; i < obj.cantidadAlumnos; i++) {   
            let nombreDelAlumno = prompt(`Ingrese el nombre del alumno. `) 
            let acumulador = 0;  
            let promedio = 0;      
            for (let y = 0; y < obj.examenes ; y++)   {
                let nota = parseFloat(prompt(`Ingrese la nota del examen`));
                acumulador = acumulador + nota;
                promedio = sacarPromedio (acumulador, obj.examenes); 
                if(promedio > mejorPromedio) {
                    mejorPromedio = promedio;
                    alumnoMejorPromedio = nombreDelAlumno;
                }

            }
            const alumno = new Alumno ({nombreDelAlumno, promedio})
            listaAlumnos.push(alumno)
            alert(`El promedio de ${alumno.nombre} es de ${alumno.promedio}`)            
        }
        
        anunciarMejorAlumno(alumnoMejorPromedio, mejorPromedio)
        

    }
   
    
    
}

for (let alumno of listaAlumnos) {
let contenedor = document.createElement('div'); 
contenedor.innerHTML = `<p>Alumno: ${alumno.nombre}</p>
                <p>Promedio: ${alumno.promedio}</p>`;
document.body.appendChild(contenedor);
}







// MAIN APP

bienvenidaLogueo("Jorge");
const clase3020 = new Clase (3, 2, 3020, "Jorge")
clase3020.comenzarClase();
procesarAlumnos(clase3020);
ordenarListaAlumnos(listaAlumnos);
mostrarAlumnos(listaAlumnos);