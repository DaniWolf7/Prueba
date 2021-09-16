import { Injectable } from '@angular/core';
import { usuario } from 'src/app/interfaces';
import usersList from 'src/assets/json/users.json';

@Injectable({
  providedIn: 'root'
})
export class UsercontrolService {
  constructor() { }

  users: usuario[] = usersList;

  //guardar en navegador la autentificacion
  savenav(data:usuario){
    var j = JSON.stringify(data)
    sessionStorage.setItem("AUTH", j);
    return
  }
  //cerrar sesion
  cerrarsesion(){
    sessionStorage.removeItem("AUTH")
    return;
  }
  //reiniciar sesion
  reSesion(){
    var c = sessionStorage.getItem('AUTH')
    if(c){
      var us:usuario = JSON.parse(c)
      var ret = this.complog(us.username, us.password)
      return ret;
    }else{
      return {data: {}, rsp: false}
    }
  }

  //autentificacion
  complog(user:string, passw:string) {
    var filtrado = this.users.filter(function(el) { return el.username === user && el.password === passw})
    
    if(filtrado.length == 1){
      this.savenav(filtrado[0])
      
      return {data: filtrado[0], rsp: true}
    }else{
      this.cerrarsesion()
      return {data: {}, rsp: false}
    }
  }  

  
}
