// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {} // Notice the 'public' keyword

  logout() {
    // Clear user authentication data
    localStorage.removeItem('token');
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
