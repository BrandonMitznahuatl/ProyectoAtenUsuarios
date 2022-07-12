import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======

>>>>>>> 89cd7d6f9dc8c3fa9419693fa8d84e5dc3537eb9
@Injectable({
  providedIn: 'root'
})
export class ConectaserverService {
<<<<<<< HEAD
  URL="http://localhost:4000/api/bd/";
  URL2="http://localhost:4000/api/bd1";
=======
  URL="http://localhost:4000/api/bd1/";

>>>>>>> 89cd7d6f9dc8c3fa9419693fa8d84e5dc3537eb9
  constructor(private http:HttpClient) { 
  }
  consultar():Observable<any>{
    let headers = new Headers().set ('Content-Type', 'Application/Json')
<<<<<<< HEAD
    return this.http.get(this.URL2);
=======
    return this.http.get(this.URL);
    
>>>>>>> 89cd7d6f9dc8c3fa9419693fa8d84e5dc3537eb9
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
<<<<<<< HEAD
//AVIÑA VELARDE DANIELA MICHELLE

export interface segui{
  Folio_seg?:String;
  id_soluprob?:String;
  Fecha_revision?:String;
  Status_problema?:String;
}
=======
//HERNÁNDEZ PACHECO ANDREA ALIN
export interface modeloLogin{
  id_Acceso?:String;
  id_regDatos?:String;
  id_rol?:String;
  Usuario?:String;
  
  
}
>>>>>>> 89cd7d6f9dc8c3fa9419693fa8d84e5dc3537eb9
