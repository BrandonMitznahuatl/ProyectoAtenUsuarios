import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ProblemtrackingComponent } from './problemtracking/problemtracking.component';
import { CatalogoComponent } from './catalogo/catalogo.component'
import { MicuentaComponent } from './micuenta/micuenta.component';
const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'problemtracking', component: ProblemtrackingComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'micuenta', component: MicuentaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
