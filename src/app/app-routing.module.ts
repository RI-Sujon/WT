import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './admin/students-management/add-student/add-student.component';
import { EditStudentInfoComponent } from './admin/students-management/edit-student-info/edit-student-info.component';
import { StudentsManagementComponent } from './admin/students-management/students-management.component';
import { ViewStudentListComponent } from './admin/students-management/view-student-list/view-student-list.component';
import { AttendanceReportComponent } from './course/attendance-report/attendance-report.component';
import { CourseComponent } from './course/course.component';
import { StreamComponent } from './course/stream/stream.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{path: '', redirectTo: '/student/registration', pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent,
    children:[
      {
        path: 'students-management', component: StudentsManagementComponent,
        children:[
          { path: 'view-list', component: ViewStudentListComponent },
          { path: 'add-student', component: AddStudentComponent },
          { path: 'edit-info', component: EditStudentInfoComponent },
        ] 
      },
    ]
  },
  { path: 'course', component: CourseComponent,
    children:[
      { path: 'stream', component: StreamComponent },
      { path: 'attendance-report', component: AttendanceReportComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
