import { Component, VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  /*
   * Se volessimo prendere i vlaori tramite viewchild, potremmo farlo tranquillamente, in questo modo
   *
   * @ViewChild('f') myForm: NgForm;
   */

  onSubmit(form: NgForm) {
    console.log('templateRef Form ', form);
    console.log('viewchilld Form ', form);
  }
}
