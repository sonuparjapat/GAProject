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
    return this.http.post(`${this.baseUrl}/user/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, data);
  }
  getUserProfile(): Observable<any> {
    const url = `${this.baseUrl}/userdata/instructerprofile`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }

  createProfile(profileData: any): Observable<any> {
    const url = `${this.baseUrl}/userdata/instructerprofile`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(url, profileData, { headers });
  }
  editProfile(tokenm: string, editedProfile: any): Observable<any> {
    const token=localStorage.getItem("token")
    const url = `${this.baseUrl}/userdata/instructerprofile/edit/${editedProfile._id}`; // Replace 'id' with the actual profile ID
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  console.log(token)
    return this.http.patch(url, editedProfile, { headers });
  }
  
  // student system>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  getstudentProfile(): Observable<any> {
    const url = `${this.baseUrl}/userdata/studentprofile`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(url, { headers });
  }

  createstudentProfile(studentprofileData: any): Observable<any> {
    const url = `${this.baseUrl}/userdata/studentprofile`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(url, studentprofileData, { headers });
  }
  editstudentProfile(tokenm: string, editedProfile: any): Observable<any> {
    const token=localStorage.getItem("token")
    const url = `${this.baseUrl}/userdata/studentprofile/edit/${editedProfile._id}`; // Replace 'id' with the actual profile ID
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  // console.log(token)
    return this.http.patch(url, editedProfile, { headers });
  }


// getting all assignments
getAllAssignments(): Observable<any[]> {
  const token=localStorage.getItem("token")
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  return this.http.get<any[]>(`${this.baseUrl}/assignment/getassignments`, { headers });
}
// assignment details
getAssignmentDetails(assignmentId: string): Observable<any> {
  const token=localStorage.getItem("token")
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  return this.http.get<any>(`${this.baseUrl}/assignment/getassignment/${assignmentId}`, { headers });
}
// submit assignment
submitAssignment(assignmentId: string, link: string, ): Observable<any> {
  const token=localStorage.getItem("token")
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  const body = { link }; // Assuming the API expects a request body with the 'link' field
  return this.http.post<any>(`${this.baseUrl}/assignment/submitassignment`, body, { headers });
}

  // Function to mark an assignment as completed
  markAssignmentAsCompleted(assignmentId: string): Observable<any> {
    const token=localStorage.getItem("token")
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.patch<any>(`${this.baseUrl}/assignment/statuschange/${assignmentId}`, {}, { headers });
  }











}
