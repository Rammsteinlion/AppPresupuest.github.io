    const ingresos =[
        new Ingreso('Salario', 2000000)
    ];


    const egresos =[
        new Egreso('Internet', 100000)
    ];

    let cargarApp = () =>{
        cargarCabecero();
    }

    let TotalIngresos =() => {
    let TotalIngreso=0;
    for(let ingreso of ingresos){
        TotalIngreso += ingreso.valor;
    }
    return TotalIngreso;
    }

    let TotalEgresos = () =>{
        let TotalEgreso =0;
        for(let egreso of egresos){
            TotalEgreso += egreso.valor;
        }
        return TotalEgreso;
    }

    let cargarCabecero = () => {
        let presupuesto = TotalIngresos() - TotalEgresos();
        let porcentajeEgreso = TotalEgresos() / TotalIngresos();
        document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
        document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
        document.getElementById('ingresos').innerHTML= formatoMoneda(TotalIngresos());
        document.getElementById('egresos').innerHTML=formatoMoneda(TotalEgresos());

    }

    //FORMATO MODENA
    const formatoMoneda = (valor) => {
        //metodo de internacionalizacion
        return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:0});
    }

    const formatoPorcentaje = (valor) =>{
        return valor.toLocaleString('en-US',{style:'percent',  minimumFractionDigits:2});
    }