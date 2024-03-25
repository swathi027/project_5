import { Component } from '@angular/core';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project_5';
  reactiveForm: FormGroup =new FormGroup({});
}
