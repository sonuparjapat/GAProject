import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://academyfyagain.onrender.com';

  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/instructer/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/instructer/login`, data);
  }
}
