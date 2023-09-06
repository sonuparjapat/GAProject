// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Check initial authentication state, e.g., by reading from localStorage
    this.isAuthenticatedSubject.next(this.isAuthenticated());
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated (e.g., based on the presence of a token)
    return !!localStorage.getItem('token');
  }

  logout(): void {
    // Perform logout actions, clear localStorage, etc.
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }
}
