import { Component, OnInit } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay, SwiperOptions } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  faPenToSquare=faPenToSquare;
  faTrashCan=faTrashCan;
  faCirclePlus=faCirclePlus;


  config: SwiperOptions = {
    loopedSlides: 5,
    initialSlide: 0,
    spaceBetween: 10,
    navigation: true,
    centeredSlides: true,
    keyboard: {
      enabled: true
    },
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      clickable: true
    },
    autoplay: true,
    speed: 1000,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      930: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
