import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add-novel',
  templateUrl: './add-novel.component.html',
  styleUrls: ['./add-novel.component.scss']
})
export class AddNovelComponent {


  onSubmit(form: NgForm) {
    debugger
   console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
  }

}
