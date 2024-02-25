import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  constructor(private shopService: ShopService) {}
  shop: any[] = [];
  pageNumber: number = 1;
  pageSize: number = 20;
  totalPages: number = 0;
  displayedPageNumbers: number[] = [];
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.shopService.getAllData(this.pageNumber, this.pageSize).subscribe(
      (data: any) => {
        this.shop = data;
        
        this.totalPages = 3;
        this.updateDisplayedPageNumbers();
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }
  prePage() {
    if (this.pageNumber > 1) {
      this.pageNumber -= 1;
      this.loadData();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageNumber = page;
      this.loadData();
    }
  }

  nextPage() {
    if (this.pageNumber < this.totalPages) {
      this.pageNumber += 1;
      this.loadData();
    }
  }

  updateDisplayedPageNumbers() {
    this.displayedPageNumbers = [];

    const startPage = Math.max(1, this.pageNumber - 1);
    const endPage = Math.min(this.totalPages, startPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      this.displayedPageNumbers.push(i);
    }
  }

 buy(item: any): void {
  this.shopService.addToOrder(item);
}
addToWishlist(item: any): void {
  this.shopService.addToWishlist(item).subscribe(
    (response) => {
      console.log('Item added to wishlist:', response);
    },
    (error) => {
      console.error('Error adding item to wishlist:', error);
    }
  );
}
 }

