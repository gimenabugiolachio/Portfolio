import { DOCUMENT } from '@angular/common';
import { Component, Inject} from '@angular/core';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.css']
})
export class SwitchThemeComponent {
isDarkActive=false;

constructor(@Inject(DOCUMENT) private document: Document){}

onChange(newValue: boolean): void{
  console.log(newValue);
  if(newValue){
this.document.body.classList.add('dark-mode');
  }else{
    this.document.body.classList.remove('dark-mode');
  }

}

}
