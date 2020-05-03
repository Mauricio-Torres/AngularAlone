import { Component, OnInit, Input } from '@angular/core';
import { Receta } from 'src/app/models/receta.models';
import { RecetaService } from '../receta.service';
import { ActivatedRoute, Data, Router } from '@angular/router';


@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit {

  recetaRecibida: Receta;

  constructor(private recetaService: RecetaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => { this.recetaRecibida = data.receta;
    });
  }

  onAddToShopingList() {
    this.recetaService.addIngredientsToShopingList(this.recetaRecibida.ingredientes)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.recetaRecibida.name, 'edit'], { relativeTo: this.route });
  }
}
