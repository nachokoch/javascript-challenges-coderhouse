// CLASES

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

class Alumno {
    constructor (nombre, promedio) {
        this.nombre = nombre;
        this.promedio = promedio;     
    }
}

// FUNCIONES


const procesarAlumnos = ( obj )=> {
    let mejorPromedio = 0;
    let alumnoMejorPromedio = "Nadie"
    console.log(`Se detectaron ${obj.cantidadAlumnos} de alumnos en el curso, cada uno con ${obj.examenes} examenes tomados.`)
    if(obj.comenzada === false){
        console.log("No se puede realizar el procesamiento ya que la clase no ha comenzado (Clase.comenzada === false)")
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
            const alumno = new Alumno (nombreDelAlumno, promedio)
            listaAlumnos.push(alumno)            
            console.log(`El promedio de ${alumno.nombre} es de ${alumno.promedio}`)            
        }
        console.log(listaAlumnos)
        anunciarMejorAlumno(alumnoMejorPromedio, mejorPromedio)
        

    }
   
    
    
}

const imprimirAlumnos = () => {
    for (let alumno of listaAlumnos) {
let contenedor = document.createElement("div"); 
contenedor.innerHTML = `<p><b>Alumno</b>: ${alumno.nombre}</p>
                     <p><b>Promedio</b>: ${alumno.promedio}</p>`
document.body.appendChild(contenedor);
}
}



const validarFormulario = (e) => {

    e.preventDefault(); 
   
    alert("Clase Creada");
   
    let nombreProfesor = formulario.children[1].value;
    
    let camada = formulario.children[3].value; 

    let cantidadDeAlumnos = formulario.children[5].value;

    let examenesPorAlumno = formulario.children[7].value;
    
    let clase = new Clase (cantidadDeAlumnos, examenesPorAlumno, camada, nombreProfesor) 
    
    clase.comenzarClase()

    printear(clase)

    let botonProceso = document.getElementById("procesar-alumnos")

    botonProceso.addEventListener("click", function(){
        procesarAlumnos(clase)
        imprimirAlumnos();
        
    })
   
}

const printear = (clase) => {    
        let contenedor = document.createElement("div"); 
        contenedor.innerHTML = `<h2>Profesor: ${clase.profesorTitular}</h2>
                                <p><b>Camada</b>: ${clase.camada}</p>
                                <p><b>Cantidad de Alumnos</b>: ${clase.cantidadAlumnos}</p>
                                <p><b>Cantidad de Examenes Por Alumno</b>: ${clase.examenes}</p>
                                <button id="procesar-alumnos"> Comenzar el procesado de alumnos</button>`
        document.body.appendChild(contenedor);    
}

let formulario = document.getElementById ("formulario-clase");

formulario.addEventListener("submit", validarFormulario);

let formularioProceso = document.getElementById("formulario-proceso")


// PROMEDIO - Funcion auxiliar de procesarAlumnos

const sacarPromedio = (acumulador, examenes ) => {
    return (acumulador/examenes);
}

// ANUNCIO MEJOR ALUMNO - Funcion auxiliar de procesarAlumnos

const anunciarMejorAlumno = (alumno, promedio) => {
    console.log(`El alumno con el mejor promedio es ${alumno} con ${promedio}`)
}

// ORDENAR ARRAY POR PROMEDIOS DE MENOR A MAYOR

const ordenarListaAlumnos = (alumnos) => {
    alumnos.sort((a, b) => parseFloat(a.promedio) - parseFloat(b.promedio));
}


// MOSTRAR TODOS LOS ALUMNOS Y SUS CALIFICACIONES.

const mostrarAlumnos = (alumnos) => {
    console.log(`Listado de alumnos y sus respectivos promedios, de menor a mayor: ${JSON.stringify(alumnos)}`)
}


// CREACION DE ARRAY 

let listaAlumnos = [];




