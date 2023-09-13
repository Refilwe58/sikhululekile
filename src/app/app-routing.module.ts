import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dashboard',component:AdminDashComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'register',component:RegisterComponent},
  {path:'subject',component:SubjectComponent},
  {path:'timetable',component:TimetableComponent},
  {path:'upload',component:UploadComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
