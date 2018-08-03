import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-property',
  templateUrl: './view-child-property.component.html',
  styleUrls: ['./view-child-property.component.css']
})
export class ViewChildPropertyComponent implements OnInit {

  ehNois() {
    console.log('SHOW!');
  }

  constructor() { }

  ngOnInit() {
  }

}
