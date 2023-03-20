import { Component } from '@angular/core';

@Component({
  // Abaixo a configuração do meu DECORATOR, no caso @Component
  selector: 'app-server', //Elemento unico, nao duplicado
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = '#13';
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() >= 0.5 ? 'online' : 'offline';
  }

  getServerId() {
    return this.serverId;
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
