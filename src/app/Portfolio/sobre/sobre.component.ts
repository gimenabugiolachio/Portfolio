import { Component, OnInit, Input } from '@angular/core';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {

  faSuitcase = faSuitcase;
  faHeadset = faHeadset;
  faPaperPlane = faPaperPlane;
  faFileLines = faFileLines;

  constructor() {}

  ngOnInit(): void {}

}
