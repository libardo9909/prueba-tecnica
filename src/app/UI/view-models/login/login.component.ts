import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  emailRegex: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
  passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
  errorMessage: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validForm(){
    if(this.emailRegex.test(this.email) && this.passwordRegex.test(this.password)){
      this.errorMessage = false;
      this.login();
    }else{
      this.errorMessage = true;
    }

  }

  login(){
    localStorage.setItem('auth', "true");
    this.router.navigate(['/admin-categories']);
  }

}
