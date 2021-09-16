import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/interfaces';
import { UsercontrolService } from 'src/app/services/usercontrol.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private S_uc: UsercontrolService,
    private router: Router
  ) {}

  nombreUsuario = null

  ngOnInit(): void {
    var c = sessionStorage.getItem('AUTH')
  
    if(c){
      var us:usuario = JSON.parse(c)
      this.nombreUsuario =  "bienvenido " + us.username;
    }
  }

  cerrarses(){
    this.S_uc.cerrarsesion()
    this.router.navigate([''])
  }


  
  

}
