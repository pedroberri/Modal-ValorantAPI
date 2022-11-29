import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
})
export class ModalComponent {
  mostrar: boolean = false

  fechar() {
    this.mostrar = false
  }

  abrir() {
    this.mostrar = true
  }

}