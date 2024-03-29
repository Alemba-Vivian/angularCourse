import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren, inject} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {HighlightedDirective} from './courses/directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './courses/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';



// function coursesServiceProvider(http: HttpClient): CoursesService{
//   return new CoursesService(http);
// }

// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE')



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
  // providers: [
  //   {provide:CONFIG_TOKEN, useValue: APP_CONFIG}
  // ]


  // providers: [
  //   CoursesService
  // //   {
  // //   provide: CoursesService,
  // //   useClass: CoursesService
  // // }

  // ]

})
export class AppComponent implements OnInit {
  // when loading data from the hard coded db
  // courses = COURSES;

  //when loading data from the database
  // courses$:Observable<Course[]>;

  // courses:Course[];

  courses:Course[]=COURSES;

  // loaded=false;



  constructor( private coursesService: CoursesService,
     @Inject(CONFIG_TOKEN) private config: AppConfig, /*private cd: ChangeDetectorRef*/ ){
    // @Inject(CONFIG_TOKEN) private config: AppConfig) 
    // console.log("root component " + this.coursesService.id)
    
    // console.log(config);

  }
  // ngDoCheck(){
  //   // console.log("ngDoCheck");


  //   // //checking if the data is loaded from the backend
  //   // if(this.loaded){
  //   //    this.cd.markForCheck()
  //   //    console.log("called for cd.markForCheck()")
  //   //    this.loaded =undefined;
  //   // }
 

  // }

  // ngOnInit is the best way to put our initialization logic
  //e.g triggering a backend http call
  ngOnInit() {

  //  console.log(this.coursesService);

    //how to add GET parameters to a request
    // const params = new HttpParams()
    //    .set("page","1")
    //    .set("pageSize","10")
    


    // this.http.get('/api/courses', {params})
    //   .subscribe(
    //      courses=>this.courses=courses
    //   )

    //using Async Pipe
    // this.courses$ =this.http.get<Course[]>('/api/courses', {params})


    // Fetching Data using the custom service
    // this.courses$ =this.coursesService.loadCourses();

    // this.coursesService.loadCourses().subscribe(courses=>
    //   {
    //     this.courses=courses;

    //     // this.loaded =true;
    //   });

  }

  onEditCourse() {

    //creating a reference for the object we want to modify
    // const course = this.courses[0]
    // const newCourse:any = {...course}

    // newCourse.description = 'New Value!';
    // this.courses[0] =newCourse;


    const course = this.courses[0]
    const newCourse:any = {...course, description:'ngOnChanges'}
    this.courses[0] =newCourse;



    }


  save(course:Course){
    this.coursesService.saveCourse(course)
       .subscribe(
          ()=>console.log("The course was saved successfully")
       )
  }

}
