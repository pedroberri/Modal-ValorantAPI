import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private httpClientAgente: HttpClient,
    private httpClientMapa: HttpClient
  ) {}
  
  getTagsAgente(): Observable<object> {
  return this.httpClientAgente.get<object>('https://valorant-api.com/v1/agents/');
}
  getTagsMapa(): Observable<object> {
    return this.httpClientMapa.get<object>('https://valorant-api.com/v1/maps/');
}
}
