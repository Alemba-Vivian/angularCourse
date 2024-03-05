import {
    AfterContentInit,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
    QueryList,
    Self,
    SkipSelf,
    ViewEncapsulation,
    inject
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    // providers:[CoursesService]
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor( @SkipSelf() private coursesService: CoursesService, 
                @Attribute('type') private type:string) {

                    console.log(type);

    }

    ngOnInit() {
        // console.log("CourseService course card",this.coursesService.id);

    }


    onTitleChanged(newTitle:string){
        this.course.description =newTitle;

    }

    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
