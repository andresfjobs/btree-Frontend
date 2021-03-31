import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  
  persona:Persona = new Persona();

  constructor(private router:Router,private route:ActivatedRoute,private service:ServiceService) { }
  
  ngOnInit(): void {
    let personaId = this.route.snapshot.paramMap.get('id') || '1';
    
    this.service.getPersonaId(+personaId)
    .subscribe(data=>{
    this.persona=data;
    })
  }

  Actualizar(){
    this.service.updatePersona(this.persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
