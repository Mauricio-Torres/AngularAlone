import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetaComponent } from '../receta/receta.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'recetas', pathMatch: 'full' },
  { path: 'recetas', component: RecetaComponent },
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
