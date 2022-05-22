import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ProblemtrackingComponent } from './problemtracking/problemtracking.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { MicuentaComponent } from './micuenta/micuenta.component';
import { PagemainComponent } from './pagemain/pagemain.component';
import { RegisterprobComponent } from './registerprob/registerprob.component';
import { Navbar2Component } from './navbar2/navbar2.component';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'problemtracking', component: ProblemtrackingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Catalogo', component: CatalogoComponent},
  {path: 'micuenta', component: MicuentaComponent},
  {path: 'pagemain', component: PagemainComponent},
  {path: 'registerprob', component: RegisterprobComponent},
  {path: 'navbar2', component: Navbar2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
