import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { LeiturasResponse } from './interface/leituras-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LeituraService {

  constructor(private HttpClient: HttpClient) { }

  getLeituras(): Observable<LeiturasResponse[]> {
    return this.HttpClient.get<LeiturasResponse[]>(environment.baseUrl + 'Leitura', {
      headers:{
        "Content-Type":"application/json"
      }      
    });
  };

  getLeiturasGrafico(): Observable<LeiturasResponse[]> {
    return this.HttpClient.get<LeiturasResponse[]>(environment.baseUrl + 'Leitura/Grafico', {
      headers:{
        "Content-Type":"application/json"
      }      
    });
  };
}
