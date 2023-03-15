import { Component } from '@angular/core';

@Component({
  // Abaixo a configuração do meu DECORATOR, no caso @Component
  selector: 'app-server', //Elemento unico, nao duplicado
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = '#13';
  serverStatus = 'online';

  getServerId() {
    return this.serverId;
  }
  getServerStatus() {
    return this.serverStatus;
  }
}
