import { Component, OnInit } from '@angular/core';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  //Iconos//
  js = faJs;
  angular = faAngular;
  bootstrap = faBootstrap;
  java = faJava;
  mysql = faDatabase;
  nodejs = faNodeJs;
  constructor() {}
  ngOnInit(): void {}
}
