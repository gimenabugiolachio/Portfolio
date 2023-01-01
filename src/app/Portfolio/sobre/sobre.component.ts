import { Component, OnInit } from '@angular/core';
import {faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {faHeadset} from '@fortawesome/free-solid-svg-icons';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  faSuitcase=faSuitcase;
  faHeadset=faHeadset;
  faPaperPlane=faPaperPlane;
  faFileLines=faFileLines;
  faCirclePlus =faCirclePlus;
  faPenToSquare=faPenToSquare;
  
  constructor() { }

  ngOnInit(): void {
  }

}
