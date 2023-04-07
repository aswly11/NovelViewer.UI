import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Novel } from '../models/novel';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NovelDataService {
  constructor(private httpClient: HttpClient) {}

  GetAllNovel(): Observable<Novel[]> {
    return this.httpClient.get<Novel[]>(environment.apiUrl + 'Novel');
  }

  PostNovel(data: Novel) {
    return this.httpClient.post(environment.apiUrl + 'Novel', data);
  }

  PutNovel(data: Novel) {
    return this.httpClient.put(environment.apiUrl + 'Novel', data);
  }

  DeleteNovel(novelId: number) {
    return this.httpClient.delete(environment.apiUrl + 'Novel/' + novelId);
  }
}
