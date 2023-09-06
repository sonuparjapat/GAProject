import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

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



// get instructer assignments
getInstructorAssignments(): Observable<any[]> {
  // Set the Authorization header with the JWT token
  const headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });

  return this.http.get<any[]>(`${this.baseUrl}/assignment/allinstructerassignment`, { headers });
}
// create instructer assignments
createInstructorAssignment(assignmentData: any): Observable<any> {
  // Set the Authorization header with the JWT token
  const headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });

  return this.http.post<any>(`${this.baseUrl}/assignment/instructerassignment`, assignmentData, { headers });
}



getAssignmentById(id: number): Observable<any> {
  const url = `${this.baseUrl}/assignment/getinstructerassignment/${id}`;
  console.log(id)
  
  // Include the token in the headers
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  
  // Pass the headers in the GET request
  return this.http.get(url, { headers });
}

updateAssignment(id: number, assignmentData: any): Observable<any> {
  const url = `${this.baseUrl}/assignment/patchassignment/${id}`;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token') // Include the token in the headers
  });
  return this.http.patch(url, assignmentData, { headers });
}

deleteAssignment(assignmentId: string): Observable<any> {
  const url = `${this.baseUrl}/assignment/deleteassignment/${assignmentId}`;
  const headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  return this.http.delete<any>(url, { headers }).pipe(
    catchError((error) => {
      console.error('Error:', error);
      return throwError(error);
    })
  );
}


}
