import { Component, OnInit, Inject } from '@angular/core';
import { OneService } from 'app/one.service';

@Component({
  selector: 'emrys-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private one: OneService, @Inject('apiUrl') private apiUrl: string) {
    console.log(one.name + ' A');
    console.log(apiUrl);
   }

  ngOnInit() {
  }

  click() {
    this.one.name = 'AAAA';
  }

}
