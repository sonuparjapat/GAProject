import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  register(): void {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
// console.log(data)
    this.http.post('https://academyfyagain.onrender.com/instructer/register', data)
      .subscribe(response => {
        console.log(response);
      },(error)=>{
        alert(error.error.msg)
      });
  }
}
