const ingresos = [
    //new Ingreso('Sueldo', 1500000)
];


const egresos = [
    //new Egreso('Internet', 113500)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let TotalIngresos = () => {
    let TotalIngreso = 0;
    for (let ingreso of ingresos) {
        TotalIngreso += ingreso.valor;
    }
    return TotalIngreso;
}

let TotalEgresos = () => {
    let TotalEgreso = 0;
    for (let egreso of egresos) {
        TotalEgreso += egreso.valor;
    }
    return TotalEgreso;
}

let cargarCabecero = () => {
    let presupuesto = TotalIngresos() - TotalEgresos();
    let porcentajeEgreso = TotalEgresos() / TotalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(TotalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(TotalEgresos());

}

//FORMATO MODENA
const formatoMoneda = (valor) => {
    //metodo de internacionalizacion
    return valor.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 });
}

const cargarIngresos = () => {
    let ingresosHtml = '';
    for (let ingreso of ingresos) {
        ingresosHtml += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHtml;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHtml = `<div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion} </div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return ingresoHtml;
}


const eliminarIngreso = (id) =>{
    let indiceEliminar = ingresos.findIndex(ingreso =>ingreso.id === id);
    ingresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarIngresos();   
}

const eliminarEgresos = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar,1);
    cargarCabecero();
    cargarEgresos();
    
}
const cargarEgresos =() =>{
    let egresoshtml = '';
    for(let egreso of egresos){
        egresoshtml += crearEgreso(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresoshtml;
}

const crearEgreso= (egreso) =>{
   let egresohtml= `<div class="elemento limpiarEstilos">
   <div class="elemento_descripcion">${egreso.descripcion} </div>
   <div class="derecha limpiarEstilos">
       <div class="elemento_valor">${formatoMoneda(egreso.valor)} </div>
       <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/TotalEgresos())}</div>
       <div class="elemento_eliminar">
           <button class='elemento_eliminar--btn'>
               <ion-icon name="close-circle-outline"
               onclick='eliminarEgresos(${egreso.id})'></ion-icon>
           </button>
       </div>
   </div>
</div>`;
return egresohtml;
}

const agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !=='' && valor.value !==''){
        if(tipo.value === 'ingreso'){
            //Number(valor.value) convierte en numerico un string
            //+valor.value convierte en numerico un string
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
            this.forma.reset();
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value,+valor.value));
            cargarCabecero();
            cargarEgresos();
            this.forma.reset();
        }
    }
}