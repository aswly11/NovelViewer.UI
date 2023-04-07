import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NovelDataService } from '../Services/novel-data.service';
import { Novel } from '../models/novel';

@Component({
  selector: 'app-edit-novel',
  templateUrl: './edit-novel.component.html',
  styleUrls: ['./edit-novel.component.scss'],
})
export class EditNovelComponent implements OnChanges {
  @Input()
  novel!: Novel;
  @ViewChild('dissmissDialog')
  dissmissDialog!: ElementRef;
  @Output() updated: EventEmitter<any> = new EventEmitter();
  addNovelModal!: ElementRef;
  editNovel = new FormGroup({
    NovelId: new FormControl(0, Validators.required),
    Name: new FormControl('', Validators.required),
    Description: new FormControl('', [Validators.required]),
    Rate: new FormControl(0, [
      Validators.required,
      Validators.max(5),
      Validators.min(0),
    ]),
  });
  public isValid: boolean = true;
  constructor(
    private novelDataService: NovelDataService,
    private ref: ChangeDetectorRef
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['novel']) {
      this.editNovel = new FormGroup({
        NovelId: new FormControl(this.novel.novelId),
        Name: new FormControl(this.novel.name),
        Description: new FormControl(this.novel.description),
        Rate: new FormControl(this.novel.rate),
      });
    }
  }

  onSubmit() {
    debugger;
    this.isValid = !this.editNovel.invalid;
    if (this.isValid) {
      this.novelDataService
        .PutNovel(this.editNovel.value as unknown as Novel)
        .subscribe((result) => {
          this.dissmissDialog.nativeElement.click();
          this.updated.emit();
        });
    }
  }
}
