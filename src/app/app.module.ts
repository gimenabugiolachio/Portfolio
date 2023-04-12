import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Portfolio/inicio/inicio.component';
import { NavbarComponent } from './Portfolio/navbar/navbar.component';
import { PortfolioComponent } from './Portfolio/portfolio/portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './Portfolio/sobre/sobre.component';
import { FormacionComponent } from './Portfolio/formacion/formacion.component';
import { SkillsComponent } from './Portfolio/skills/skills.component';
import { ProyectosComponent } from './Portfolio/proyectos/proyectos.component';
import { ContactoComponent } from './Portfolio/contacto/contacto.component';
import { FooterComponent } from './Portfolio/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AcercaComponent } from './Portfolio/acerca/acerca.component';
import { SwitchThemeComponent } from './Portfolio/switch-theme/switch-theme.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    PortfolioComponent,
    SobreComponent,
    FormacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    AcercaComponent,
    SwitchThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    SwiperModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
