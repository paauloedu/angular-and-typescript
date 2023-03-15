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
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !false;
    }, 2000);
  }

  getServerCreateStatus() {
    return this.serverCreationStatus;
  }

  onServerCreate() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
