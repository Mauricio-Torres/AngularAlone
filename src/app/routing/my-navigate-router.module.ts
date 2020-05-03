import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetaComponent } from '../receta/receta.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecetaDetalleComponent } from '../receta/receta-detalle/receta-detalle.component';
import { ResetaStartComponent } from '../receta/reseta-start/reseta-start.component';
import { RecetaResolvedService } from '../services/recetaResolved.service';
import { RecetaCEditComponent } from '../receta/receta-edit/receta-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'recetas', pathMatch: 'full' },
  { path: 'recetas', component: RecetaComponent, children: [
      { path: '', component: ResetaStartComponent },
      { path: ':name', component: RecetaDetalleComponent, resolve: { receta: RecetaResolvedService } },
      { path: 'creat/new', component: RecetaCEditComponent },
      { path: ':id/edit', component: RecetaCEditComponent }
  ] },
  { path: 'shoping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MyNavigateRouterModule { }
