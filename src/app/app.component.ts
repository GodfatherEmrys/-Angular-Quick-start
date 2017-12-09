import { Component, Inject } from '@angular/core';
import { OneService } from 'app/one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '천지를 괴리시키는 개벽의 별';
  names = [
    '길가메쉬',
    '아르토리아',
    '란슬롯'
  ];

  constructor(private one: OneService) {
    console.log(one.name);
  }

  custom() {
    console.log('custom');
  }

}
