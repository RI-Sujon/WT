import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Student } from '../model/student';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private studentSubject: BehaviorSubject<Student> | any;
  public student: Observable<Student> | any ;

  public surjiUrl = "http://localhost:5001/student/" ;

  constructor(private formbuilder:FormBuilder, private http: HttpClient) 
  {
    this.studentSubject = new BehaviorSubject<Student>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.student = this.studentSubject.asObservable();
  }

  
  public addStudentAccount(){
    var body = {
      "BSSEROLL": this.formModel.value.BSSEROLL,
      "password": this.formModel.value.Password,
      "Email": this.formModel.value.Email,
    }

    return this.http.post<any>(this.surjiUrl + "signUp", body);
  }
  public addStudentAccount2(){
    var body = {
      "BSSEROLL": this.formModel.value.BSSEROLL,
      "StudentName": this.formModel.value.StudentName,
      "Session": this.formModel.value.Session,
      "Email": this.formModel.value.Email,
    }

    return this.http.post<any>(this.surjiUrl + "signUp2", body);
  }


  public getAllStudents(){
    return this.http.get<any>(this.surjiUrl + "getAll") ;
  }

  public deleteAccount(bsseroll: any){
    return this.http.post<any>(this.surjiUrl + "delete", bsseroll) ;
  }

  public editStudentInfo(id: any, bsseRoll: any){
    var body = {
      "Id": id,
      "BSSEROLL": bsseRoll,
      "StudentName": this.formModel.value.StudentName,
      "Session": this.formModel.value.Session,
      "Email": this.formModel.value.Email,
    }

    return this.http.post<any>(this.surjiUrl + "update", body);
  }

  

  formModel = this.formbuilder.group({
    StudentName: ['', Validators.required],
    BSSEROLL: ['', Validators.required],
    Email : ['', [Validators.email, Validators.required]],
    Session : ['', Validators.required],
    Password : [''],
  });


  public storeStudentForEditStudentInfo: Student = new Student() ;



}
