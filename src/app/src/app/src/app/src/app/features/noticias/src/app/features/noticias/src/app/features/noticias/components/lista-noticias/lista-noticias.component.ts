import { Component, OnInit } from '@angular/core';
import { isAndroid } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { NoticiasService } from '../../../../shared/services/noticias.service';

@Component({
  selector: 'ns-lista-noticias',
  templateUrl: './lista-noticias.component.html'
})
export class ListaNoticiasComponent implements OnInit {
  noticias: any[] = [];
  plataforma: string = '';

  constructor(
    private noticiasService: NoticiasService,
    private router: RouterExtensions
  ) {}

  ngOnInit() {
    this.noticias = this.noticiasService.getNoticias();
    // Código que asigna valor solo en Android
    if (isAndroid) {
      this.plataforma = 'Android';
    }
  }

  verDetalle(item: any) {
    this.router.navigate(['/noticias/detalle', item.id]);
  }
}
