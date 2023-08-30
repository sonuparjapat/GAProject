import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.http.post('https://academyfyagain.onrender.com/instructer/login', data)
      .subscribe((response: any) => {
        console.log(response);
        // Store the token in local storage
        localStorage.setItem('token', response.token);
        // Navigate to the dashboard
        this.router.navigate(['/dashboard']);
      });
  }
}
