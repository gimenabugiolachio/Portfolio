import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Portfolio/portfolio/portfolio.component';
import { InicioComponent } from './Portfolio/inicio/inicio.component';
import { ProyectosComponent } from './Portfolio/proyectos/proyectos.component';
import { ContactoComponent } from './Portfolio/contacto/contacto.component';
import { AcercaComponent } from './Portfolio/acerca/acerca.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'acerca', component: AcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
