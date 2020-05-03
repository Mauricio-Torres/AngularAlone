import { Component, OnInit, Input } from '@angular/core';
import { Receta } from 'src/app/models/receta.models';
import { RecetaService } from '../../receta.service';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.css']
})
export class RecetaItemComponent implements OnInit {

  @Input() receta : Receta;

  constructor(private recetaService: RecetaService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   // console.log(this.receta);
  //   this.recetaService.recetaSeleccionada.emit(this.receta);
  // }

}
