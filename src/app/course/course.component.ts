import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../model/student';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(public router: Router) { }

  isAdmin = false ;

  student: Student | any;

  ngOnInit(): void {
    if(localStorage.getItem("isLoggedIn")==null){
      this.router.navigate(["login"]) ;
    }

    if(localStorage.getItem("isLoggedIn")=="admin"){
      this.isAdmin = true ;
    }
    else if(localStorage.getItem("isLoggedIn")=="student"){
      this.student = localStorage.getItem('user') ;
      this.student = JSON.parse(this.student);
    }
  }

  sign_out(){
    localStorage.removeItem('isLoggedIn') ;
    localStorage.removeItem('user') ;
    this.router.navigate(['login']) ;
  }
}
