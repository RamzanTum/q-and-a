import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherBrowserComponent } from "./teacher/teacher-browser.component";
import { QuestionBrowserComponent } from "./question-browser/question-browser.component";

const routes: Routes = [
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'teachers', component: TeacherBrowserComponent },
  { path: 'questions', component: QuestionBrowserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
