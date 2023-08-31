import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getUserProfile(): Observable<any> {
    const url = `${this.baseUrl}/instructerdata/userprofile`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }

  createProfile(profileData: any): Observable<any> {
    const url = `${this.baseUrl}/instructerdata/profile`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(url, profileData, { headers });
  }
  editProfile(tokenm: string, editedProfile: any): Observable<any> {
    const token=localStorage.getItem("token")
    const url = `${this.baseUrl}/instructerdata/profile/edit/${editedProfile._id}`; // Replace 'id' with the actual profile ID
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  console.log(token)
    return this.http.patch(url, editedProfile, { headers });
  }
  
  
}
