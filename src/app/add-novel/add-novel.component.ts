import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NovelDataService } from '../Services/novel-data.service';
import { Novel } from '../models/novel';
@Component({
  selector: 'app-add-novel',
  templateUrl: './add-novel.component.html',
  styleUrls: ['./add-novel.component.scss'],
})
export class AddNovelComponent {
  @ViewChild('dissmissDialog')
  dissmissDialog!: ElementRef;
  addNovelModal!: ElementRef;
  @Output() updated: EventEmitter<any> = new EventEmitter();
  addNovel = new FormGroup({
    Name: new FormControl('', Validators.required),
    Description: new FormControl('', [Validators.required]),
    Rate: new FormControl('', [
      Validators.required,
      Validators.max(5),
      Validators.min(0),
    ]),
  });
  public isValid: boolean = true;
  constructor(private novelDataService: NovelDataService) {}
  onSubmit() {
    this.isValid = !this.addNovel.invalid;
    if (this.isValid) {
      this.novelDataService.PostNovel(this.addNovel.value as unknown as Novel).subscribe(result=>{
        this.dissmissDialog.nativeElement.click();
        this.updated.emit();
      });
    }
  }
}
