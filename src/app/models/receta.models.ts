import { Ingredientes } from './ingredientes.models';
export class Receta
{
    public name: string;
    public descripcion: string;
    public imgPath: string;
    public ingredientes: Ingredientes[];

    constructor(name: string, descrip: string, pathImg: string, ingredientes: Ingredientes[])
    {
        this.name = name;
        this.descripcion = descrip;
        this.imgPath = pathImg;
        this.ingredientes = ingredientes;


    }
}
