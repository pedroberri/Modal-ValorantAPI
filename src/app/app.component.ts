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
  selectedTag: string
  linkImage: string;
  mapas: string[]

  constructor(
    private ModalService: ModalService
  ) {}

  ngOnInit(): void {
    this.ModalService.getTags()
    .subscribe(tags => {
      this.mapas = tags['data'];
      console.log(this.mapas);
    });
  }

  consultar() {
    this.linkImage = this.selectedTag
  }
}
