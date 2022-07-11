import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectaserverService {
  URL="http://localhost:4000/api/bd/";
  constructor(private http:HttpClient) { 
  }
  consultar():Observable<any>{
    let headers = new Headers().set ('Content-Type', 'Application/Json')
    return this.http.get(this.URL);
}
///////////////////////////////////////////////////////////////////////
//Reyes Mitznahuatl Brandon Jesus
//get 
getRegistro(){
  return this.http.get(this.URL);
}
//get un Registro
getUnRegistro(id:string){
return this.http.get(this.URL+'/'+id);  
}

//agregar equipo
addRegistro(equipo:modelo){
  return this.http.post(this.URL, equipo);
}

//eliminar
deleteRegistro(id:string){
  return this.http.delete(this.URL+'/'+id);
}

//modificar

editRegistro(id:string, equipo:modelo){
  return this.http.put(this.URL+'/'+id, equipo);
}

///////////////////////////////////////////////////////////////////////////7

}
//Reyes Mitznahuatl Brandon Jesus
export interface modelo{
  id_regDatos?: String,
  id_user?: String; 
  Nombre?: String; 
  ApellPat?: String;
  ApellMat?: String; 
  Correo?: String; 
  Edad?: String;
  Numero_Tel?: String; 
  Sexo?: String;
}

///////////////////////////////////////////////////////////////////////////////