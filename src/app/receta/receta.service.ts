import { Injectable, EventEmitter } from '@angular/core';
import { Receta } from '../models/receta.models';
import { Ingredientes } from '../models/ingredientes.models';
import { ShopinListService } from '../shopping-list/shopin-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

constructor(private shopinListService: ShopinListService) { }

recetaSeleccionada = new EventEmitter<Receta>();
private recetas: Receta[] = [
  new Receta('pollo curry',
              'este me encanta',
              'http://recetasdecocina.elmundo.es/wp-content/uploads/2016/02/Receta-de-pollo-al-curry.jpg',
              [
                new Ingredientes('papas', 2),
                new Ingredientes('carne', 1),
                new Ingredientes('salsa', .5),
              ])

    ];

    getRecetas() {
      return this.recetas.slice();
    }

    addIngredientsToShopingList(ingredients: Ingredientes[]) {
      this.shopinListService.addIngredientesReceta(ingredients);
    }

}
