import { Component, OnInit } from '@angular/core';
import { NovelDataService } from '../Services/novel-data.service';
import { Novel } from '../models/novel';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.scss'],
})
export class NovelsComponent implements OnInit {
  public Novels: Novel[] = [];
  public NovelTobeDeleted!: Novel;
  public NovelTobeEdited!: Novel;

  constructor(private novelDataService: NovelDataService) {}
  ngOnInit() {
    this.refreshTable();
  }

  deleteNovel(novel: Novel) {
    debugger
    this.NovelTobeDeleted = this.Novels.filter((x) => x.novelId == novel.novelId)[0];
  }

  editNovel(novel: Novel) {

    this.NovelTobeEdited = this.Novels.filter((x) => x.novelId == novel.novelId)[0];
  }

  updated()
  {
    this.refreshTable()
  }
  refreshTable() {
    this.novelDataService.GetAllNovel().subscribe((result) => {
      this.Novels = result;
    });

  }
}
