import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  template: `
  <div id="typewriter">
    <p>{{ text }}</p>
  </div>
`,
styles: [`
  #typewriter {
    overflow: hidden;
    white-space: nowrap;
  }
`]
})
export class InicioComponent implements OnInit {
  text = '';
  words = ['{Desarrolladora}', '{Full Stack}',];
  wordIndex = 0;
  delay = 150;
  isDeleting = false;


  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faUser = faUser;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;

  constructor() {
    this.typewrite();
  }

  typewrite() {
    const current = this.wordIndex % this.words.length;
    const fullText = this.words[current];

    if (this.isDeleting) {
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      this.text = fullText.substring(0, this.text.length + 1);
    }

    setTimeout(() => {
      this.typewrite();
    }, this.delay);

    if (!this.isDeleting && this.text === fullText) {
      this.isDeleting = true;
      this.delay = 160;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      this.wordIndex++;
      this.delay = 150;
    }
  }


  ngOnInit(): void {}
}
