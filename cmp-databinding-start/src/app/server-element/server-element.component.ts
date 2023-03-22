import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // None (sem encapsulamento): todos paragrafos receberam cor azul
  // Emulated: pelo visto, é o padrão Angular, um css para cada Component
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
