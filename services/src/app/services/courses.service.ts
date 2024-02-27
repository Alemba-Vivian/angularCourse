import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { 
  
  }
    //Defining API our of our service
  loadCourses(): Observable<Course[]>{

    const params = new HttpParams()
    .set("page","1")
    .set("pageSize","10")

     //using Async Pipe
     return this.http.get<Course[]>('/api/courses', {params})
  }

  //Data modification
  saveCourse(course: Course){

    const headers = new HttpHeaders()
                    .set("X-Auth","userId")


    return this.http.put(`/api/courses/${course.id}`, course, {headers});

  }
}
