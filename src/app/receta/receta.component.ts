import { Component, OnInit } from '@angular/core';
import { Receta } from '../models/receta.models';
import { RecetaService } from './receta.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'],
  providers: [RecetaService]
})
export class RecetaComponent implements OnInit {

  recetaSeleccionada : Receta;

  constructor(private recetaService: RecetaService) { }

  ngOnInit() {

    this.recetaService.recetaSeleccionada.subscribe((receta: any) => {
      this.recetaSeleccionada = receta;
    });
  }

}
