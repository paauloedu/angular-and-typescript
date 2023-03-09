import { Component } from '@angular/core';

@Component({
  /*selector: '[app-servers]',
  selector: '.app-servers',*/
  selector: 'app-servers',
  /*
   * Antes, aqui em templateUrl, passavamos o component.html que eu utilizo no meu servers.comp.ts
   * agora, é possível passar um template de um Component dentro de outro Component
   * no caso do template abaixo, ele utiliza o app-server como link externo
   */
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
