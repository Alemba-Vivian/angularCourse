import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  // courses = COURSES;
  courses;

  constructor(private http:HttpClient) {

  }

  // ngOnInit is the best way to put our initialization logic
  //e.g triggering a backend http call
  ngOnInit() {

    //how to add GET parameters to a request
    const params = new HttpParams()
       .set("page","1")
       .set("pageSize","10")
    

    this.http.get('/api/courses', {params})
      .subscribe(
         courses=>this.courses=courses
      )
  }



}