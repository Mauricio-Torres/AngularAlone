import { Injectable } from '@angular/core';
import { Ingredientes } from '../models/ingredientes.models';


export class ShopinListService {

constructor() { }

private ingredientesList: Ingredientes[] =
[
  new Ingredientes ('Manzana',4),
  new Ingredientes ('Cereza',3),
];
  getIngredientes() {
    return this.ingredientesList;
  }

  addIngredientes(ingredientes: Ingredientes) {
    this.ingredientesList.push(ingredientes);
  }

  addIngredientesReceta(ingredientes: Ingredientes[]) {

    // ingredientes.forEach((ingrediente: any) => {
    //  this.ingredientesList.push(ingrediente);
    // });
    this.ingredientesList.push(...ingredientes);

  }
}
