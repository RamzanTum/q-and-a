import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TeacherBrowserComponent } from './teacher/teacher-browser.component';
import { HttpClientModule } from "@angular/common/http";
import { TeacherListItemComponent } from './teacher-list-item/teacher-list-item.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { FormsModule } from "@angular/forms";
import { QuestionBrowserComponent } from './question-browser/question-browser.component';
import { QuestionListItemComponent } from './question-list-item/question-list-item.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeacherBrowserComponent,
    TeacherListItemComponent,
    TeacherProfileComponent,
    QuestionBrowserComponent,
    QuestionListItemComponent,
    SignInComponent
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
