import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // // Aqui estou juntando toda logica que esta no service, ao meu AppComponent.
  // // Agora o Angular sabe como criar o Serviço de Contas
  // providers: [AccountsService],

  // O NIVEL MAIS ALTO É O AppModule, não colocar aqui. Apenas manter no import
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
