//Crear un apuntador para las clases
const nombre=document.querySelector('.nombre');
const numero=document.querySelector('.numero');
const direccion=document.querySelector('.direccion');
const btn_agregar_tarea=document.querySelector('.btn-agregar-tarea');

const listadotareas=document.querySelector('.listado-tareas')
// aceder al qlocal storage
const DB_LocalStora=window.localStorage;
btn_agregar_tarea.onclick=()=>{
    let contacto={
        id:Math.random(1,100),
        nombre:nombre.value,
        numero:numero.value,
        direccion:direccion.value,
    }
    guardarContacto(DB_LocalStora,contacto);
    cargarContactos(DB_LocalStora,listadotareas);
    
}
