import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  faUser=faUser;
  faRightFromBracket=faRightFromBracket;
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'Iniciar Sesión' }).result.then(
			(result) => {
				this.closeResult = `${result}`;
			}
		);
	}
}
