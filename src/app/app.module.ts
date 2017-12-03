import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { GrandComponent } from './grand/grand.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { OneService } from 'app/one.service';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    GrandComponent,
    ParentComponent,
    ChildComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    OneService,
    {
      provide: 'apiUrl',
      useValue: 'https://api.github.com'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
