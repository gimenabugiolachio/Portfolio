import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLogged = false;

  faUser=faUser;
  faBars=faBars;
  faArrowRightFromBracket=faArrowRightFromBracket;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  login():void{
    this.router.navigate(['/inicio-sesion']);
  }


}
