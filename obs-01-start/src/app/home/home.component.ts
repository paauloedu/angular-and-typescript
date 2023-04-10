import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    //Aqui passa um numero em milisegundos, que irá disparar um evendo a cada X milisegundos
    //Vai ficar infinitamente contando, mas podemos parar isso
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        //Observável cancelar por causa de um erro, é diferente de estar completo
        //Um erro cancela o Observável e não o completa
        if (count === 2) {
          //Encerrando o observavel
          observer.complete();
        }
        if (count > 3) {
          //Disparando erro
          observer.error(new Error('Count é maior que 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    //Cancelamos a inscrição. Agora ele conta novamente do 0 ao voltar
    this.firstObsSubscription.unsubscribe();
  }
}
