import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  // Meu app recebe uma resposta do botão presente em cockpit
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    // Recebo dados do evento do click do botão
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName, //Digo que o nome é oq estou recebendo no obj serverData
      content: serverData.serverContent, //Digo que o content é oq estou recebendo no obj serverData
    });
  }

  // Meu app recebe uma resposta do botão presente em cockpit
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName, //Digo que o nome é oq estou recebendo no obj blueprintData
      content: blueprintData.serverContent, //Digo que o content é oq estou recebendo no obj blueprintData
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
