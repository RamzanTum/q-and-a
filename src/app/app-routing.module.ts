import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherBrowserComponent} from "./teacher/teacher-browser.component";
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'teachers', component: TeacherBrowserComponent },
  { path: 'questions', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
