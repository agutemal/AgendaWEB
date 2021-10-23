const guardarContacto=(db, contacto)=>{
    db.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = '/';
}

const cargarContactos=(db, parenNode)=>{
    let claves=Object.keys(db)
    for (let index = 0; index < claves.length; index++) {
        const element = claves[index];
        const contacto=JSON.parse(db.getItem(element));
        crearContacto(parenNode, contacto, db);  
    }
}

const crearContacto = (parenNode, contacto, db)=>{
    let divContacto=document.createElement('div');
    let nombreContacto=document.createElement('h3');
    let numeroContacto=document.createElement('p');
    let direccionContacto=document.createElement('p');
    let iconoBorrar=document.createElement('span');

    //Llenar los elemenso html con los datos del objeto
    nombreContacto.innerHTML=contacto.nombre;
    numeroContacto.innerHTML=contacto.numero;
    direccionContacto.innerHTML=contacto.direccion;
    iconoBorrar.innerHTML='delete_forever';

    //Añadir a las clases los nombres
    divContacto.classList.add('contacto');
    iconoBorrar.classList.add('material-icons','icono');

    //Funcion para eliminar elemento de la base de datos
    iconoBorrar.onclick=()=>{
        db.removeItem(contacto.id);
        window.location.href = '/';
    }

    //Añadir los elementos a la clase
    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    parenNode.appendChild(divContacto);

}