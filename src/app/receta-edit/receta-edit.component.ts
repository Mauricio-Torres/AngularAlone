import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredientes } from '../models/ingredientes.models';
import { ShopinListService } from '../shopping-list/shopin-list.service';

@Component({
  selector: 'app-receta-edit',
  templateUrl: './receta-edit.component.html',
  styleUrls: ['./receta-edit.component.css']
})
export class RecetaEditComponent implements OnInit {

  @ViewChild('nameImput', { static: false }) nombreInput: ElementRef;
  @ViewChild('cantidadInput', { static: false }) cantidadInput: ElementRef;

  constructor(private shopinListService: ShopinListService) {

  }

  ngOnInit() {

  }
  onAddItem() {
    const nameIngrediente = this.nombreInput.nativeElement.value;
    const cantidadIngrediente = this.cantidadInput.nativeElement.value;

    const newIngrediente = new Ingredientes(nameIngrediente, cantidadIngrediente);
    console.log(newIngrediente);

    this.shopinListService.addIngredientes(newIngrediente);
  }

  onDeleteItem() {

  }
  onClearItem() {

  }

}
