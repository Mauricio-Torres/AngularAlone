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
        ]),
        new Receta('pollo chantilly',
        'este me encanta',
        // tslint:disable-next-line: max-line-length
        'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/10/recetas-sencillas-con-pollo-y-crema.jpg',
        [
          new Ingredientes('papas', 2),
          new Ingredientes('pollo', 1),
          new Ingredientes('salsa', .5),
          new Ingredientes('salsa tartara', 1),
          new Ingredientes('cilantro', 1/2),
        ])
    ];

    getRecetas() {
      return this.recetas.slice();
    }

    getReceta(name: string) {
      const receta =  this.recetas.find( (e) => {
        return e.name === name;
      });

      return receta;
    }

    addIngredientsToShopingList(ingredients: Ingredientes[]) {
      this.shopinListService.addIngredientesReceta(ingredients);
    }

}
