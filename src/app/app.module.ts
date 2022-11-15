import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {TeacherComponent} from './teacher/teacher.component';
import {QuestionsComponent} from './questions/questions.component';
import {HttpClientModule} from "@angular/common/http";
import { TeacherListItemComponent } from './teacher-list-item/teacher-list-item.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeacherComponent,
    QuestionsComponent,
    TeacherListItemComponent,
    TeacherProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
