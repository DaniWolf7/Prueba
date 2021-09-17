import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';



// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrincipalComponent } from './components/principal/principal.component';

//redux
import { StoreModule } from '@ngrx/store';
import { pagereducer } from './rdx/reducer/ships.reducer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrincipalModule,

    StoreModule.forRoot({
      pagereducter: pagereducer
    }),

    StoreModule.forRoot({}, {})
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
