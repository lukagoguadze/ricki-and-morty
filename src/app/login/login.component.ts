import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,private router: Router, private authService: AuthService ) {}
 
  
  displayLoginForm: boolean = true;
  ngOnInit() {
    if (!this.authService.getIsLoggedIn()) {
      this.displayLoginForm = false;
    }
  
  }
  
  onSubmit() {
    const storedUser = localStorage.getItem('regUser');
    
    if (storedUser) {
      const parsedUsers: User[] = JSON.parse(storedUser);
      const foundUser = parsedUsers.find(
        user => user.firstName === this.loginForm.value.username && user.password === this.loginForm.value.password
      );
  
      if (foundUser) {
        this.authService.login();
        this.displayLoginForm = false;
  
        // Store the user information in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
  
        this.router.navigate(['/home']);
      } else {
        alert('User not found');
      }
    } else {
      console.log('User not found');
    }
  }
  

  jj() {
    this.displayLoginForm = !this.displayLoginForm;
  }
 
}
