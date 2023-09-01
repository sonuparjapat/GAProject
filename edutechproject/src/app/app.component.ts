import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent    {
  constructor(private http: HttpClient, private router: Router) {}
  title = 'edutechproject';
  usertoken:any=localStorage.getItem("token")
  
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("insturcterprofile")
    localStorage.removeItem("loginas")
    // localStorage.removeItem("token")
    this.router.navigate(['/login']);
    // console.log("logout")

  }
}
