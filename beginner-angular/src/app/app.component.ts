import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];

  // @ViewChild("cardRef1", { read: ElementRef })
  // card1: ElementRef;

  // @ViewChild("courseImage")
  // courseImage: ElementRef;

    @ViewChildren(CourseCardComponent)
     cards:QueryList<CourseCardComponent>

    constructor() {
   
       }

  ngAfterViewInit(){

    this.cards.changes.subscribe(cards=>console.log(cards))
    

    //we should not modify data here
    // this.courses[0].description ='test';
  }

  // @ViewChild("cardRef2")
  // card2: CourseCardComponent;

  //  startDaate = new Date(2000,0,1);
  //  price =9.99;

  //  title =COURSES[0].description;

  //  coreCourse=COURSES[0];

 


    onCourseEditer() {
      this.courses.push({
        id: 1,
        description: "angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      });

     
    }

    onCourseSelected(course: Course) {
      console.log("cards", this.cards);
    }

  // trackCourse(index:number, course:Course){
  //   return course.id

  // }
}
