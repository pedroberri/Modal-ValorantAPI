import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar: boolean = false;
  tags: string[] = [];
  selectedTag1: string
  selectedTag2: string
  linkImage1: string
  linkImage2: string
  mapas: string[]
  agentes: {isPlayableCharacter}[]

  constructor(
    private ModalService: ModalService
  ) {}

  ngOnInit(): void {

    this.ModalService.getTagsAgente().subscribe(tags => {  
      this.agentes = tags['data'];
      this.agentes = this.agentes.filter((agente) => agente.isPlayableCharacter)
      console.log(this.agentes);
    });

    this.ModalService.getTagsMapa().subscribe(tags => {
      this.mapas = tags['data'];
      console.log(this.mapas);
    });
  }

  consultar1() {
    this.linkImage1 = this.selectedTag1
  }

  consultar2() {
    this.linkImage2 = this.selectedTag2
  }
}
