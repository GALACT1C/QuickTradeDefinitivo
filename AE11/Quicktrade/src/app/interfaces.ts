export interface IUsuario{
    "nombre":string,
    "id":string
}

export interface IProducto{
    //"key":string, //<- Descomentar si no va
    "nombre" : string,
    "descripcion" : string,
    "categoria" : string,
    "precio" : number,
    "uid" : string //añadido
    //Ejercicio2
    "venta": string
    //Fin Ejercicio2
}

export interface IKey extends IProducto{
    "key" : string
}

export interface ITecnologia extends IProducto{
    "estado" : string
}

export interface IInmobiliaria extends IProducto{
    "metros" : number,
    "numhab" : number,
    "numba" : number,
    "localidad" : string
}

export interface IMotor extends IProducto{
    "tipov" : string,
    "km" : number
}

export interface IHogar extends IProducto{

}