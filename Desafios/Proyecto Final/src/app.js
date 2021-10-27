// Ready el DOM

$(() => {
    console.log('El DOM esta listo');
   });

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
$('body').append(`<p><b>Alumno</b>: ${alumno.nombre}</p>
<p><b>Promedio</b>: ${alumno.promedio}</p>`); 
}
}



const validarFormulario = (e) => {    
   
    alert("Clase Creada");
   
    let nombreProfesor = formulario.find('input[name="ProfesorTitular"]').val();    
    
    let camada = formulario.find('input[name="Camada"]').val();

    let cantidadDeAlumnos = formulario.find('input[name="CantidadDeAlumnos"]').val();

    let examenesPorAlumno = formulario.find('input[name="ExamenesPorAlumno"]').val();
    
    let clase = new Clase (cantidadDeAlumnos, examenesPorAlumno, camada, nombreProfesor) 
    
    clase.comenzarClase()

    printear(clase)

    let botonProceso = $("#procesar-alumnos")

    botonProceso.on("click", function(){
        procesarAlumnos(clase)
        imprimirAlumnos();
        
    })
   
}

const printear = (clase) => {    
        $("body").append(`<div><h2>Profesor: ${clase.profesorTitular}</h2>
        <p><b>Camada</b>: ${clase.camada}</p>
        <p><b>Cantidad de Alumnos</b>: ${clase.cantidadAlumnos}</p>
        <p><b>Cantidad de Examenes Por Alumno</b>: ${clase.examenes}</p>
        <button id="procesar-alumnos"> Comenzar el procesado de alumnos</button></div>`);          
}

let formulario = $("#formulario-clase");

formulario.on("submit", function(e){
    e.preventDefault();
    validarFormulario();
});

let formularioProceso = $("#formulario-proceso")


// PROMEDIO - Funcion auxiliar de procesarAlumnos

const sacarPromedio = (acumulador, examenes ) => {
    return (acumulador/examenes);
}

// ANUNCIO MEJOR ALUMNO - Funcion auxiliar de procesarAlumnos

const anunciarMejorAlumno = (alumno, promedio) => {
    $('body').append(`<h3>El alumno con el mejor promedio es ${alumno} con ${promedio}</h3>`)
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




