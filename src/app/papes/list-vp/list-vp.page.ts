import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-vp',
  templateUrl: './list-vp.page.html',
  styleUrls: ['./list-vp.page.scss'],
})
export class ListVPPage implements OnInit {
  slidesOptions = {
    slidesPerView: 1.5,

  };
 

  constructor() { }

  ngOnInit() {
  }
  
}
