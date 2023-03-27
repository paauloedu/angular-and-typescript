import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['nav {margin-bottom: 20px; }'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>(); // Crio meu evento para dizer qual foi a feature selecionada

  // Nessa função eu recebo qual foi selecionada recipe ou shop e emito isso
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
