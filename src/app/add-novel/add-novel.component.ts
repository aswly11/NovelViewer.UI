import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-novel',
  templateUrl: './add-novel.component.html',
  styleUrls: ['./add-novel.component.scss']
})
export class AddNovelComponent {

  addNovel = new FormGroup({
    Name: new FormControl('',Validators.required),
    Description: new FormControl('',[ Validators.required]),
    Rate: new FormControl('',[ Validators.required,Validators.max(5),Validators.min(0)]),

  });

  constructor(){


  }

  get Name(){return this.addNovel.get('Name')}
  get Description(){return this.addNovel.get('Description')}
  get Rate(){return this.addNovel.get('Rate')}
  
  onSubmit() {
    if(this.addNovel.invalid)
    {
      debugger
      return
    }
  }
}
