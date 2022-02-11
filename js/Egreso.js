class Egreso extends Dato{
    static contadorEgresos =0;

    constructor(descripcion,valor){
        super(descripcion,valor); //inicar el objeto de la clase padre
        this._id=++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}