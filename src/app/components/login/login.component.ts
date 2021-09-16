import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { UsercontrolService } from 'src/app/services/usercontrol.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  unregistered: boolean = false;
  invalid: boolean = false;
 
  constructor(
    private fb: FormBuilder,
    private router: Router,

    private S_uc: UsercontrolService
  ) { 
    var check = this.S_uc.reSesion()
    if(check.rsp){
      this.unregistered = false;
      this.router.navigate(['/principal/ships'])
    }

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {
    if (this.loginForm.invalid) { return }
    
    var userLogin = this.loginForm.value.username;
    var passw = this.loginForm.value.password;
    var ret = this.S_uc.complog(userLogin,passw);
    if(ret.rsp){
      this.unregistered = false;
      this.router.navigate(['/principal/ships'])
    }else{
      this.unregistered = true;
    }
    
  }
}

