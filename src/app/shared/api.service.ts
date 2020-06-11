import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Gif } from '../shared/gif';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  offset: number = 0;
  searchQuery: string = '';

  constructor(public http: HttpClient) { }

  getTrendingGifs() {
    return this.http.get(`${environment.apiUrl}/trending?limit=9&offset=${this.offset}&api_key=${environment.apiKey}`)
      .pipe(map((resp: Gif) => resp.data));
  }

  paginatePage(): void {
    this.offset += 9;
  }

  resetPaginatePage(): void {
    this.offset = 0;
  }

  changeSearchQuery(query: string): void {
    this.searchQuery = query;
  }

  resetSearchQuery(): void {
    this.searchQuery = '';
  }

  searchGifs() {
    return this.http.get(`${environment.apiUrl}/search?limit=9&q=${this.searchQuery}&offset=${this.offset}&api_key=${environment.apiKey}`)
      .pipe(map((resp: Gif) => resp.data));
  }
}
