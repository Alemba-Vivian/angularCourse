import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import{ CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CourseCardComponent,
    CourseImageComponent
  ],
  providers: [],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
