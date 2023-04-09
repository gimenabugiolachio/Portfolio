import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Portfolio/portfolio/portfolio.component';
import { SobreComponent } from './Portfolio/sobre/sobre.component';
import { FormacionComponent } from './Portfolio/formacion/formacion.component';
import { SkillsComponent } from './Portfolio/skills/skills.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path: 'sobreMi', component: SobreComponent},
  {path: 'formacion', component:FormacionComponent},
  {path: 'skills', component: SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
