import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'emrys-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() age;

  @Output() up = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  next() {
    this.up.emit();
  }
}
