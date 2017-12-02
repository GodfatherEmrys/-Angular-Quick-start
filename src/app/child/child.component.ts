import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'emrys-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent
implements OnInit, OnChanges, AfterContentInit, 
AfterViewInit, AfterContentChecked, AfterViewChecked {
  
  @Input() name;
  @Input() age;

  @Output() next = new EventEmitter();

  constructor() {
    console.error('constructor');
   }

  ngOnInit() {
    console.error('ngOnInit');
    setInterval(()=>{
      this.next.emit();
    }, 3000);
  }

  ngOnChanges(){
    console.error('ngOnChanges');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }


  // 템플릿에 참조가 잇다.. ㅎㄷㄷ
  // click(e: HTMLInputElement){
  //   console.log(e)
  // }

  click(text, event){
    console.log(text);
    console.log(event);
  }
}
