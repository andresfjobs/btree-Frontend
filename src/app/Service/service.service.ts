import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  Url = 'http://localhost:3000/personas';

  getPersonas() {
    return this.http.get<Persona[]>(this.Url+'/listar');
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(cus_nmid:number){
    return this.http.get<Persona>(this.Url+"/"+cus_nmid);

  }
  updatePersona(persona:Persona){

    return this.http.put<Persona>(this.Url+"/"+persona.nmid,persona);
  }
  BorrarPersonaId(cus_nmid:number, persona:Persona){
    
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        p:persona,
      },
    };
    return this.http.delete(this.Url+"/"+cus_nmid,options);

  }
}
