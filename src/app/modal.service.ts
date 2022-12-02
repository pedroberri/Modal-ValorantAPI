import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private httpClient: HttpClient
  ) {
  }
  
  getTags(): Observable<object> {
    return this.httpClient.get<object>('https://valorant-api.com/v1/maps/');
}
}
