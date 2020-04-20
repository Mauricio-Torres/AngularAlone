import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receta } from 'src/app/models/receta.models';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-lista',
  templateUrl: './receta-lista.component.html',
  styleUrls: ['./receta-lista.component.css']
})
export class RecetaListaComponent implements OnInit {
  recetas: Receta[];

  constructor(private recetaService: RecetaService) { }
  existRecetas = ()=> this.recetas.length > 0? true: false;
  ngOnInit() {

    this.recetas = this.recetaService.getRecetas();
  }


}
