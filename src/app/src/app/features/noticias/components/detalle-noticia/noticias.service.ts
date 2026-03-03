import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NoticiasService {
  getNoticias() {
    return [
      { id: 1, titulo: 'Angular 17 lanzado',              categoria: 'Tech'    },
      { id: 2, titulo: 'NativeScript mejora rendimiento', categoria: 'Mobile'  },
      { id: 3, titulo: 'TypeScript 5.0 disponible',       categoria: 'Tech'    },
      { id: 4, titulo: 'Nueva versión de Node.js',        categoria: 'Backend' }
    ];
  }
}
