import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpertsComponent} from "./expert/experts.component";
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  { path: '', redirectTo: 'experts', pathMatch: 'full' },
  { path: 'experts', component: ExpertsComponent },
  { path: 'questions', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
