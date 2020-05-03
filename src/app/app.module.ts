import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RecetaComponent } from './receta/receta.component';
import { RecetaItemComponent } from './receta/receta-lista/receta-item/receta-item.component';
import { RecetaDetalleComponent } from './receta/receta-detalle/receta-detalle.component';
import { RecetaListaComponent } from './receta/receta-lista/receta-lista.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecetaEditComponent } from './receta-edit/receta-edit.component';
import { DropdownDirective } from './directivas/dropdown.directive';
import { ShopinListService } from './shopping-list/shopin-list.service';
import { SizeDirective } from './directivas/size.directive';
import { ChangeColorDirective } from './directivas/changeColor.directive';
import { MyNavigateRouterModule } from './routing/my-navigate-router.module';
import { RecetaResolvedService } from './services/recetaResolved.service';
import { RecetaService } from './receta/receta.service';
import { ResetaStartComponent } from './receta/reseta-start/reseta-start.component';
import { RecetaCEditComponent } from './receta/receta-edit/receta-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetaComponent,
    RecetaItemComponent,
    RecetaListaComponent,
    RecetaDetalleComponent,
    ShoppingListComponent,
    RecetaEditComponent,
    DropdownDirective,
    SizeDirective,
    ChangeColorDirective,
    ResetaStartComponent,
    RecetaCEditComponent

    ],
  imports: [
    BrowserModule,
    MyNavigateRouterModule,
  ],
  providers: [ShopinListService, RecetaResolvedService, RecetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
