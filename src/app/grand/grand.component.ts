import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emrys-grand',
  templateUrl: './grand.component.html',
  styleUrls: ['./grand.component.css']
})
export class GrandComponent implements OnInit {

  age = 35;

  constructor() { }

  ngOnInit() {
  }

  up(){
    this.age++;
  }
}
