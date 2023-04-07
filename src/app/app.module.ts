import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovelsComponent } from './novels/novels.component';
import { AddNovelComponent } from './add-novel/add-novel.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DeleteNovelComponent } from './delete-novel/delete-novel.component';
import { EditNovelComponent } from './edit-novel/edit-novel.component';

@NgModule({
  declarations: [
    AppComponent,
    NovelsComponent,
    AddNovelComponent,
    DeleteNovelComponent,
    EditNovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
