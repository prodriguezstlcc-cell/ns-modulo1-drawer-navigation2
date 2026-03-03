import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/noticias', pathMatch: 'full' },
  {
    path: 'noticias',
    loadChildren: () =>
      import('./features/noticias/noticias.module').then(m => m.NoticiasModule)
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
