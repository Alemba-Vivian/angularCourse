import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DoCheck,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Self,
    SimpleChanges,
    SkipSelf,
    ViewEncapsulation,
    inject
} from '@angular/core';
import {Course} from '../../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    // providers:[CoursesService]
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, 
OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked,
 AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor( @SkipSelf() private coursesService: CoursesService, 
                @Attribute('type') private type:string) {

                    // console.log(type);

                    console.log("constructor", this.course);

    }
    
  
   
    ngOnInit() {
        // console.log("CourseService course card",this.coursesService.id);
        console.log("ngOnInit", this.course);

    }


    ngOnDestroy(){

        console.log("NGOnDestroy");
   
    }

    ngOnChanges(changes){
        console.log("ngOnChanges", changes);
    }

     ngAfterContentChecked(){

       console.log("ngAfterContentChecked");

    //    this.course.description ='ngAfterContentChecked';
    //    this.course.category ='Advanced';
    //    this.course.iconUrl ='';
    }



    ngAfterViewChecked(){
         console.log("ngAfterViewChecked");

        //  this.course.description ='ngAfterViewChecked';
    }

    ngAfterContentInit(){
        console.log(" ngAfterContentInit")
    }

    ngAfterViewInit(){
        console.log("ngAfterViewInit");
    }

    ngDoCheck(){
       console.log("ngDoCheck")
    }
   

    onTitleChanged(newTitle:string){
        this.course.description =newTitle;

    }

    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
