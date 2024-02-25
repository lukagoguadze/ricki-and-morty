import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn:boolean = false;

  login() { 
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    console.log('User logged in:', this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
  }
}
