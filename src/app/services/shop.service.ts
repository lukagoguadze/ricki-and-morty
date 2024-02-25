import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private apiUrl = 'http://localhost:3000/shop';
  private apiUrll = 'http://localhost:3000/wishlist';
  private order: any[] = [];

  private orderSubject = new Subject<any[]>();

  constructor(private http: HttpClient) {}

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAllData(page: number, pageSize: number): Observable<any> {
    const params = { page: page.toString(), pageSize: pageSize.toString() };
    return this.http.get(`${this.apiUrl}`, { params });
  }

  addToOrder(item: any): void {
    const loggedInUser = this.getLoggedInUser();
    if (loggedInUser) {
      item.firstName = loggedInUser.firstName;
      this.order.push(item);
      this.orderSubject.next([...this.order]);
      this.saveOrderToDatabase(item);
    } else {
      console.error('User not logged in');
    }
  }

  private getLoggedInUser(): User | null {
    const storedUser = localStorage.getItem('loggedInUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }

  getOrder(): Observable<any[]> {
    const storedUser = localStorage.getItem('loggedInUser');
  
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
  
      if (parsedUser && parsedUser.firstName) {
        return this.http.get<any[]>(`${this.apiUrll}/user/${parsedUser.firstName}`);
      } else {
        console.error('User id not found');
        return EMPTY;
      }
    } else {
      console.error('User not found in local storage');
      return EMPTY;
    }
  }
  


   saveOrderToDatabase(item: any): void {
    this.http.post(this.apiUrll + '/add', item).subscribe(
      (response) => {
        
      },
      (error) => {
        console.error('Error saving order to wishlist database:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Response body:', error.error);
        }
      }
    );
  }

  addToWishlist(item: any): Observable<any> {
    const storedUser = localStorage.getItem('regUser');
  
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);
      if (parsedUser && parsedUser.id) {
        return this.http.post<any>(`${this.apiUrll}/add/${parsedUser.id}`, item);
      } else {
     
        console.error('User not logged in or user id not found');
        return EMPTY; 
      }
    } else {
      console.error('User not found in local storage');
      return EMPTY;
    }
  }
  

  

  deleteOrderToDatabase(id: number): void {
    
    const url = `${this.apiUrll}/${id}`;
    
    this.http.delete(url).subscribe(
      (response) => {
        
      },
      (error) => {
        console.error('Error deleting order from wishlist database:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Response body:', error.error);
        }
      }
    );
  }}
