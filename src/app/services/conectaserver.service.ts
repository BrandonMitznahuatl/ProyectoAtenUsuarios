import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { Observable, retry } from 'rxjs';

=======
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
export class ConectaserverService {
<<<<<<< Updated upstream
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
=======
URL='http://localhost:4000/api/seguimiento/2589';
URL2='http://localhost:4000/api/seguimiento/';

  constructor(private http:HttpClient) { }
  //METODO CONSULTA
  consultar():Observable<any>{
    let header = new Headers().set('Content-Type','Application/JSON')
    return this.http.get(this.URL),this.http.get(this.URL2,);
  }
}
export interface modelo{
  Nombre?:String;
  Apellidos?:String;
  Folio_problema?:String;
  Correo?:String;
  Número_telefónico?:String;
  Tipo_de_problema?:String;
  Especifique_problema?:String;
  Status_problema ?:String;
}
>>>>>>> Stashed changes
