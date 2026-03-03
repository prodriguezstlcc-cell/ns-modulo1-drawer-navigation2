import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { ListaNoticiasComponent } from './components/lista-noticias/lista-noticias.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component';

@NgModule({
  declarations: [ListaNoticiasComponent, DetalleNoticiaComponent],
  imports: [NativeScriptCommonModule, NoticiasRoutingModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NoticiasModule {}
