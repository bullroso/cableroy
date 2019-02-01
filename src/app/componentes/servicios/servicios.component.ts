import { Component, OnInit } from '@angular/core';
import { getComponent } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  noPause = true;
  myInterval = 10000;
  activeSlideIndex = 0;

  hideModal: boolean = true; 

  slides = [
    {image: 'assets/img/slider/1.jpg'},
    {image: 'assets/img/slider/2.jpg'},
    {image: 'assets/img/slider/3.jpg'}
  ];

  constructor() { }

  submitComments(){
    this.hideModal = false;
  }


  ngOnInit() {
  }



}
