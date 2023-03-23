import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // None (sem encapsulamento): todos paragrafos receberam cor azul
  // Emulated: pelo visto, é o padrão Angular, um css para cada Component
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef; // Pegando o que está fora e visivel para server-element
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef; //Estou pegando do que está sendo renderizado no ngContent

  constructor() {
    console.log('construtor foi chamado!!!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges foi chamado!!!');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit foi chamado!!!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
  ngDoCheck(): void {
    console.log('ngDoCheck foi chamado!!!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit foi chamado!!!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked foi chamado!!!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit foi chamado!!!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked foi chamado!!!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy foi chamado!!!');
  }
}
