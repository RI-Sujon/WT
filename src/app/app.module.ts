import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { StudentService } from './shared/student.service';
import { AdminComponent } from './admin/admin.component';
import { StudentsManagementComponent } from './admin/students-management/students-management.component';
import { ViewStudentListComponent } from './admin/students-management/view-student-list/view-student-list.component';
import { AddStudentComponent } from './admin/students-management/add-student/add-student.component';
import { EditStudentInfoComponent } from './admin/students-management/edit-student-info/edit-student-info.component';
import { CourseComponent } from './course/course.component';
import { StreamComponent } from './course/stream/stream.component';
import { AttendanceReportComponent } from './course/attendance-report/attendance-report.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    StudentsManagementComponent,
    ViewStudentListComponent,
    AddStudentComponent,
    EditStudentInfoComponent,
    CourseComponent,
    StreamComponent,
    AttendanceReportComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [StudentService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
