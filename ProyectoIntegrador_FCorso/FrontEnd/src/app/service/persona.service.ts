import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) { }
  /** aca tengo la duda si es HttpClientModule o como lo deje, antes salia que el get estaba con problemas*/
  
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL + 'traer/perfil');  
  }
}
