import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit{


 
  
  

  // @Input()
  // title:string;


  @Input({
    required:true
  })
  course:Course;


  @Input()
  noImageTemplate:TemplateRef<any>;

  @Input({
    required:true
  })
  // cardIndex:number;
   index:number;

  @Output()
  courseSelected = new EventEmitter<Course>();



  @ContentChildren(CourseImageComponent, {read: ElementRef})
  Images:QueryList<ElementRef>;

 
  ngAfterViewInit(){
    
  }

  ngAfterContentInit(){
    console.log(this.Images);
    
  }
 

 

  onCourseViewed(){
    console.log("Card-Component- Event was clicked");

    this.courseSelected.emit(this.course);
  }

  noImageIsVisible(){
    return this.course &&  this.course.iconUrl
  }

  cardClasses(){

    if(this.course.category =='BEGINNER'){
      return ['beginner']

    }
  
  }

  cardStyles(){
    return {
      'text-decoration':'underline',
       'color':'green'
      }
  }

}
