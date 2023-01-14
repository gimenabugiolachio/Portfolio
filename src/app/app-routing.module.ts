import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Portfolio/portfolio/portfolio.component';
import { IniciarSesionComponent } from './Portfolio/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path: 'inicio-sesion', component: IniciarSesionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
