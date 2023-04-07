import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Novel } from '../models/novel';
import { NovelDataService } from '../Services/novel-data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-novel',
  templateUrl: './delete-novel.component.html',
  styleUrls: ['./delete-novel.component.scss'],
})
export class DeleteNovelComponent {
  @Input()
  novel!: Novel|null;
  @Output() updated: EventEmitter<any> = new EventEmitter();
  @ViewChild('dissmissDialog')
  dissmissDialog!: ElementRef;
  DeleteNovel = new FormGroup({
  });
  constructor(private novelDataService: NovelDataService) {}
  Delete() {
    debugger
    this.novelDataService.DeleteNovel(this.novel!!.novelId).subscribe(()=>{
      this.dissmissDialog.nativeElement.click();
      this.updated.emit();
    });
  }
}
