

// LLAMADA PARA SABER LOS FERIADOS DEL ANIO. //
const URLGET ="data/datos.json"
$("body").append('<div class="container mt-3"><button class="btn btn-secondary" id="btn1">Click para averiguar los feriados</button></div>');
$("#btn1").click(() => {
    $.getJSON(URLGET, function (respuesta, estado) {
        if(estado === "success"){
        let misDatos = respuesta.holidays;
        for (const dato of misDatos) {
        $("body").append(`<div class="container mt-5">
        <h3>${dato.name}</h3>
        <p> ${dato.date}</p>
        </div>`)
       
            }
        }
    });
});


// PONER EN READY EL DOM. //

$(() => {
    console.log('El DOM esta listo');
   });

// CLASES //

// CLASE "CLASE" //

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

// CLASE "ALUMNO" //

class Alumno {
    constructor (nombre, promedio) {
        this.nombre = nombre;
        this.promedio = promedio;     
    }
}

// FUNCIONES //

const imprimirAlumnos = (listaAlumnos) => {    
$('body').append(`<div class="container mt-3"><p><b>Alumno</b>: ${listaAlumnos[0].nombre}</p>
<p><b>Promedio</b>: ${listaAlumnos[0].promedio}</p></div>`)
}

// VALIDACION DE FORMULARIO + OBTENCION DE DATOS.

const validarFormulario = (e) => {    
   
    alert("Clase Creada");
   
    let nombreProfesor = formulario.find('input[name="ProfesorTitular"]').val();    
    
    let camada = formulario.find('input[name="Camada"]').val();

    let cantidadDeAlumnos = formulario.find('input[name="CantidadDeAlumnos"]').val();

    let examenesPorAlumno = formulario.find('input[name="ExamenesPorAlumno"]').val();
    
    clase = new Clase (cantidadDeAlumnos, examenesPorAlumno, camada, nombreProfesor) 
    
    clase.comenzarClase()

    mostrarInformacionCamada(clase)

    let botonProceso = $("#procesar-alumnos")  

    // CREACION DE FORMULARIO PARA ALUMNOS

    botonProceso.on("click", function(){        
        $("body").append(`<div class="container mt-3" id="contenedorProcesado">
        <form id="formulario-alumnos">
        <div class ="form-group">
            <label>Nombre del Alumno</label>
            <input type="text" name="NombreDelAlumno" class="form-control" placeholder="Nombre del alumno.">
        </div>
        </form>`         
        )

        // LOOP PARA LA CREACION DE INPUTS DE MANERA DINAMICA.

        for(let index = 0; index < examenesPorAlumno; index++) {
            $("#formulario-alumnos").append(`<div class ="form-group">
            <label>Calificacion ${index+1}</label>
            <input type="number"  name="calificacion-${index}" class="form-control" placeholder="Calificacion.">
            <small class="form-text text-muted">Ingrese el numero sin puntos ni guiones.</small>
            </div>        
            `)
        }
        $("#formulario-alumnos").append(`<input type="submit" value="Cargar Alumno" class="btn btn-primary mt-3 mr-3" id="botonAgregarAlumno" form="formulario-alumnos"></input></form>`)    
        $("#contenedorProcesado").append(`<button class="btn btn-primary mt-3" id="botonInforme">Generar Informe</button>`)           
        $("#formulario-alumnos").on('submit',function(e){
            e.preventDefault()
            agregarAlumno(clase)
            alert("Alumno y promedio creado.")
        })
        
    })  
    }
    
    


// CREACION DE ALUMNO Y AGREGADO AL ARRAY DE LISTA DE ALUMNOS.

const agregarAlumno = (clase) => {    
    let acumulado = 0;
    let formularioAlumnos = $('#formulario-alumnos')
    let nombreDelAlumno = formularioAlumnos.find('input[name="NombreDelAlumno"]').val();
    for (let index = 0; index < clase.examenes; index++) {
        let nota = parseInt(formularioAlumnos.find(`input[name="calificacion-${index}"]`).val());        
        acumulado = acumulado + nota;
    }
    let promedio = (acumulado/clase.examenes)
    const alumno = new Alumno (nombreDelAlumno, promedio)
    listaAlumnos.unshift(alumno)     
    imprimirAlumnos(listaAlumnos);
}

// CREACION DEL DIV QUE CONTIENE LA INFORMACION DE LA CLASE.

const mostrarInformacionCamada = (clase) => {    
        $("body").append(`<div class="container mt-3" id="informacionCamada"><p><b>Profesor:</b> ${clase.profesorTitular}</p>
        <p><b>Camada</b>: ${clase.camada}</p>
        <p><b>Cantidad de Alumnos</b>: ${clase.cantidadAlumnos}</p>
        <p><b>Cantidad de Examenes Por Alumno</b>: ${clase.examenes}</p>
        <button id="procesar-alumnos" class="btn btn-primary"> Comenzar el procesado de alumnos</button></div>`);          
}


// SELECTOR DE FORMULARIO Y SUBMIT.

let formulario = $("#formulario-clase");

formulario.on("submit", function(e){
    e.preventDefault();
    validarFormulario();
});



// FUNCION PARA ANUNCIAR Y CREAR EL DIV DEL MEJOR PROMEDIO.

$(document).on('click',"#botonInforme", function() { 
     anunciarMejorAlumno(listaAlumnos)
    
})


// PROMEDIO - Funcion auxiliar de procesarAlumnos

const sacarPromedio = (acumulador, examenes ) => {
    return (acumulador/examenes);
}

// ANUNCIO MEJOR ALUMNO - Funcion auxiliar de procesarAlumnos

const anunciarMejorAlumno = (alumnos) => {
    ordenarListaAlumnos(alumnos)
    $('#contenedorProcesado').append(`<div class="container mt-3"><h3>El alumno con el mejor promedio es ${alumnos[0].nombre} con ${alumnos[0].promedio}</h3></div>`)
}

// ORDENAR ARRAY POR PROMEDIOS DE MENOR A MAYOR

const ordenarListaAlumnos = (alumnos) => {
    alumnos.sort((a, b) => parseFloat(b.promedio) - parseFloat(a.promedio));
}

// CREACION DE ARRAY DE ALUMNOS

let listaAlumnos = [];

// ANIMACIONES

$('#header').fadeIn("slow", ()=>{
    $('#formulario-clase').slideDown("slow")
});



