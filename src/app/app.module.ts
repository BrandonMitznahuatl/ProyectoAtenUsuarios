import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ProblemtrackingComponent } from './problemtracking/problemtracking.component';
import { LoginComponent } from './login/login.component';

import { PagemainComponent } from './pagemain/pagemain.component';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    ProblemtrackingComponent,
    LoginComponent,
    RegisterComponent,
    MicuentaComponent,
    PagemainComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
