import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: LoginService, public router: Router) { }

  ngOnInit(): void {
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if(isLoggedIn=='admin'){
      this.router.navigate(["admin/students-management/view-list"]) ;
    }
    else if(isLoggedIn=='student'){
      if(localStorage.getItem('user')!=null){
        this.router.navigate(["course/stream"]) ;
      }
    }
  }

  signIn(): void{
    var v = this.service.signInformModel.value.usernameOrEmail ;

    if(v=="~admin"){
      this.service.adminSignInOperation().subscribe(
        (response: any)=>{
          if(response == true){
            localStorage.setItem('isLoggedIn', "admin");
            this.router.navigate(["admin/students-management/view-list"]) ;
            this.service.signInformModel.reset() ;
          }
          else{
            console.log("not succeed");
          }
        }
      ) ;
    }
    else{
      this.service.studentSignInOperation().subscribe(
        (response: any)=>{
          if(response != null){
            if(response!=false){
              localStorage.setItem('isLoggedIn', "student");
            localStorage.setItem('user', JSON.stringify(response));
            this.router.navigate(["course/stream"]) ;
            this.service.signInformModel.reset() ;
            }
          }
          else{
            console.log("not succeed");
          }
        }
      ) ;
    }
  }
}
