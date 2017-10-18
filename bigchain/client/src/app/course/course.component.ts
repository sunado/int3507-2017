import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as config from '../../../config/config.json';
import 'rxjs/Rx';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course_id = '';
  students = [];

  constructor(public http: Http) { }

  ngOnInit() {
  }

  search() {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    // var headers = new Headers();
    // headers.append("Content-Type", 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin','*');
    // var options = new RequestOptions({ headers: headers });
    this.http.get(config.SCORE_URL + "/listScore/course=" + this.course_id, options).map(resp => resp.json())
      .subscribe((resp) => {
        this.students = resp;

    });
  }

}
