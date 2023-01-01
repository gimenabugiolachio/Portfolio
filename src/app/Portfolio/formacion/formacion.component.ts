import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})

export class FormacionComponent implements OnInit {
faGlobe=faGlobe;
faFacebook=faFacebook;
faCalendarDays=faCalendarDays;
faPenToSquare=faPenToSquare;
faTrashCan=faTrashCan;
faCirclePlus=faCirclePlus;

  constructor() { }

  ngOnInit(): void {
  }

}
