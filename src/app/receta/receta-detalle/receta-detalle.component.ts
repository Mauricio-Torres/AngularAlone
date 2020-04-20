import { Component, OnInit, Input } from '@angular/core';
import { Receta } from 'src/app/models/receta.models';
import { RecetaService } from '../receta.service';


@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit {

  @Input() recetaRecibida : Receta;
  constructor(private recetaService: RecetaService ) { }

  ngOnInit() {
  }

  onAddToShopingList() {
    this.recetaService.addIngredientsToShopingList(this.recetaRecibida.ingredientes)
  }
}
