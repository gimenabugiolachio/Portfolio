import { Component, OnInit } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
 //Iconos//
 html=faHtml5;
 css =faCss3 ;
 js=faJs;
 angular=faAngular;
 bootstrap=faBootstrap;
 java=faJava;
 mysql=faDatabase;
 diseno=faObjectGroup;
 idea=faLightbulb;
 equipo=faPeopleGroup;
 resolucion=faBrain;
 faCirclePlus=faCirclePlus;
 faPenToSquare=faPenToSquare;

  constructor() { }
  isLogged = false;
  ngOnInit(): void {
  }

}
