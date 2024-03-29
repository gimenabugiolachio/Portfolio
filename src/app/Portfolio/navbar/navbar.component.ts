import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})

export class NavbarComponent implements OnInit {


  faUser=faUser;
  faBars=faBars;
  faArrowRightFromBracket=faArrowRightFromBracket;

  constructor(private router: Router) { }

  ngOnInit(): void { }




}
