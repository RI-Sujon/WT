import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder, private http: HttpClient) { } 

  public url = "http://localhost:5001/" ;

  public adminSignInOperation(){
      var body = {
        "username": this.signInformModel.value.usernameOrEmail,
        "password": this.signInformModel.value.password,
      }

      return this.http.post<any>(this.url + "login/admin", body);
  }

  public studentSignInOperation(){
      var body = {
        "Email": this.signInformModel.value.usernameOrEmail,
        "password": this.signInformModel.value.password,
      }
  
      return this.http.post<any>(this.url + "login/student", body);
      
  }

  signInformModel = this.fb.group({
    usernameOrEmail: [''],
    password: [''],
  });
  
}
