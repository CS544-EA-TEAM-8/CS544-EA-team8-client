import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'course',
  templateUrl: './course.html',
  styleUrls: ['./course.scss']
})
export class CourseComponent {
  fg: FormGroup;
  constructor() { }

  onSubmit() {

  }
}