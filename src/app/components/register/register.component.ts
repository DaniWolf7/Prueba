import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { UsercontrolService } from 'src/app/services/usercontrol.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;
  iniform(){
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password: [ '', [Validators.required, Validators.minLength(6)]],

    })
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private S_uc: UsercontrolService
  ) { }

  ngOnInit(): void {
    this.iniform()
  }

  registerUser() {
    if (this.registerForm.invalid) { return }
    
    var userLogin = this.registerForm.value;
    var registrar = this.S_uc.registuser(userLogin);
    if(registrar.rsp){

      this.router.navigate(['/principal/ships'])
    }else{
      window.alert("El nombre de usuario o el email ya esta registrado")
    }
    

  }

}
