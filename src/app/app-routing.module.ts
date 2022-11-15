import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherComponent} from "./teacher/teacher.component";
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'teachers', component: TeacherComponent },
  { path: 'questions', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
