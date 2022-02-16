const ingresos = [
    new Ingreso('Sueldo', 1500000),
    new Ingreso('Auxilio Transporte', 117500)
];


const egresos = [
    new Egreso('Internet', 113500),
    new Egreso('Datos', 54500)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
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
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return ingresoHtml;
}

