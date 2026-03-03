import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-detalle-noticia',
  templateUrl: './detalle-noticia.component.html'
})
export class DetalleNoticiaComponent implements OnInit {
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: RouterExtensions
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

  goBack() {
    this.router.back();
  }
}
