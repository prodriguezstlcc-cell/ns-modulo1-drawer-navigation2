import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component';

const routes: Routes = [
  { path: '', component: ListaNoticiasComponent },
  { path: 'detalle/:id', component: DetalleNoticiaComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class NoticiasRoutingModule {}
