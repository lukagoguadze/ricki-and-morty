import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  arr:User[]=[];
  ngOnInit() {
    const storedUsers = localStorage.getItem('reguser');
    this.arr = storedUsers ? JSON.parse(storedUsers) : [];
  }
  forms: FormGroup = this.formBuilder.group({
    email: ['', Validators.email],
    password: ['',Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}")],
    repeatPassword: ['', Validators.required],
    gender: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthYear: [null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.forms.valid) {
      alert("registered successfully.")
      this.arr.push( this.forms.value)
      console.log(this.arr );
      localStorage.setItem('regUser',JSON.stringify(this.arr));
     
    } else {
      alert("Registration failed")
      console.error('Form is invalid. Please check your entries.');
    }
  }
loginForm:boolean=true;

ff(){
this.loginForm=false;
}

}
