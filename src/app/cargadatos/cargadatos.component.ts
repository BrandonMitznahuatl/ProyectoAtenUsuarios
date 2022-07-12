import { Component, OnInit } from '@angular/core';
import { ConectaserverService, modelo } from '../services/conectaserver.service';

@Component({
  selector: 'app-cargadatos',
  templateUrl: './cargadatos.component.html',
  styleUrls: ['./cargadatos.component.css']
})
export class CargadatosComponent implements OnInit {
<<<<<<< Updated upstream
 recupera:any=[];
  constructor(private conectaserver:ConectaserverService) { 

  }
  ejecutaconsulta(){
    this.conectaserver.consultar().subscribe(
    res =>{
      console.log(res)
      this.recupera=res
    }
    ) 
  }
  ngOnInit(): void {
    this.ListarRegistro();
  }
  
  ListarRegistro()
  {
    this.conectaserver.getRegistro().subscribe(
      res=>{
        this.recupera=res;
        console.log(res);
      },
     err => console.log(err)
    );
=======
recupera: modelo[]=[]
  constructor(private conectaserver:ConectaserverService) { }
ejecutaconsulta(){
this.conectaserver.consultar().subscribe(
res=>{
  console.log(res)
this.recupera=res
}

)
}
  ngOnInit(): void {
    this.ejecutaconsulta();
>>>>>>> Stashed changes
  }
}
