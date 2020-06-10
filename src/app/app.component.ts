import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';
import * as chunk from 'lodash.chunk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  gifs: Array<any> = [];
  isLoading: boolean = false;
  loadedAll: boolean = false;
  isFirstLoad: boolean = true;
  searchQuery: string = '';

  constructor(public httpService: ApiService) {}

  ngOnInit(): void {
    this.getTrendingGifs();
    this.handleScroll();
  }

  getTrendingGifs(): void {
    this.isLoading = true;
    this.httpService.getTrendingGifs()
      .subscribe((resp: any) => {
        if (resp.data.length) {
          let { data } = resp;
          let filteredRow = chunk(data, 3);
          this.gifs.push(...filteredRow);
        } else {
          this.loadedAll = true;
        }
        this.isLoading = false;
        this.isFirstLoad = false;
      });
  }

  handleScroll(): void {
    window.onscroll = () => this.detectBottom();
  }

  detectBottom(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      window.scrollTo(0, window.scrollY);
      this.httpService.paginatePage();
      if (!this.loadedAll) {
        if (this.httpService.searchQuery.length) {
          this.searchGifs();
        } else {
          this.getTrendingGifs();
        }
      }
    }
  }

  searchGifs() {
    this.httpService.searchGifs()
      .subscribe((resp: any) => {
        if (resp.data.length) {
          let { data } = resp;
          let filteredRow = chunk(data, 3);
          this.gifs.push(...filteredRow);
        } else {
          this.loadedAll = true;
        }
        this.isLoading = false;
        this.isFirstLoad = false;
      });
  }

  onSearch(): void {
    this.gifs = [];
    this.httpService.resetPaginatePage();
    this.httpService.changeSearchQuery(this.searchQuery);
    if (this.searchQuery.length) {
      this.searchGifs();
    } else {
      this.getTrendingGifs();
    }
  }
}
