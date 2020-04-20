import { Component, OnInit } from '@angular/core';
import { Ingredientes } from '../models/ingredientes.models';
import { ShopinListService } from './shopin-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientesList: Ingredientes[] = [];

  constructor(private shopinListService: ShopinListService) { }

  ngOnInit() {
      this.ingredientesList = this.shopinListService.getIngredientes();
  }

}
