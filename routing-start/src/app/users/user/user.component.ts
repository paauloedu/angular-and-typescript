import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      // O snaphot pega uma imagem do momento,
      id: this.route.snapshot.params['id'], //Pegamos o parametro que identificamos la nas rotas como :id
      name: this.route.snapshot.params['name'],
    };
    //Agora, vamos ver o caso quando a pagina atualiza uma informação.
    //Como meu metodo diz, eu sobrescrevo meus parametros, agora sim tudo certo.
    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
      //Consigo reagir e atualizar as mudanças se estiver na msm pg, usando observáveis
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
