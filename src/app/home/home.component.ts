import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';

declare var bootstrap: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private api: ApiService) {}
  arr: any[] = [];
  originalArr: any[] = [];
  info: any = {};
  searchTerm: string = '';
  pageNumber: number = 1;
  pageSize: number = 20; 
  displayedPageNumbers: number[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    new bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly'), {
      interval: 2000, 
      touch: true
    });
  }
  nextPage() {
    if (this.pageNumber < this.info.pages) {
      this.pageNumber += 1;
      this.loadData();
    }
  }

  loadData(): void {
   
      if (this.searchTerm.trim() === '') {
        this.api.getCharacterData(this.pageNumber).subscribe((data: any) => {
          this.arr = data.results;
          this.originalArr = this.arr.slice();
          this.info = data.info;
          this.calculateDisplayedPageNumbers();
        });
      } else {
        this.api.searchCharacters(this.pageNumber,this.searchTerm).subscribe((data: any) => {
          this.handleData(data);
        });
      }
  }

  handleData(data: any): void {
   
    const startIndex = (this.pageNumber - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.arr = data.results.slice(startIndex, endIndex);

    this.originalArr = data.results;
    this.info = {
      count: data.info.count,
      pages: Math.ceil(data.info.count / this.pageSize),
      next: data.info.next,
      prev: data.info.prev,
    };

    this.calculateDisplayedPageNumbers();
  }

  calculateDisplayedPageNumbers(): void {
    const totalPages = this.info.pages;
    const maxDisplayedPages = 3;

    let startPage = this.pageNumber - 1;
    if (startPage + maxDisplayedPages > totalPages) {
      startPage = totalPages - maxDisplayedPages;
    }

    this.displayedPageNumbers = Array.from(
      { length: maxDisplayedPages },
      (_, i) => startPage + i + 1
    );
  }

  prePage() {
    if (this.pageNumber > 1) {
      this.pageNumber -= 1;
      this.loadData();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.info.pages) {
      this.pageNumber = page;
      this.loadData();
    }
  }

 

  search(): void {
   
    this.loadData();
  }
}
