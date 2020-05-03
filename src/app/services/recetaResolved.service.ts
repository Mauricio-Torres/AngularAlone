import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecetaService } from '../receta/receta.service';
import { Observable } from 'rxjs/internal/Observable';
import { Receta } from '../models/receta.models';

@Injectable()
export class RecetaResolvedService implements Resolve<Receta> {

  receta: any;

constructor( private serviceRecetas: RecetaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Receta |
  Observable<Receta> | Promise<Receta> {

    return this.serviceRecetas.getReceta(route.params.name);

  }

}
