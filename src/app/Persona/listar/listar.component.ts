import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private service:ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  Borrar(Persona:Persona){
    this.service.BorrarPersonaId(Persona.nmid, Persona)
    .subscribe(data=>{
      alert("borrado con exito!");

      const indiceBorrado = this.personas.indexOf(Persona);
      this.personas.splice(indiceBorrado,1);
    })


  }
}
