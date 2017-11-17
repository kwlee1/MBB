import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //new
import { HttpModule } from '@angular/http'; //new

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ApiService } from './api.service';
import { DashComponent } from './dash/dash.component';
import { QuestionComponent } from './question/question.component';
import { NewqComponent } from './newq/newq.component';
import { ShowComponent } from './question/show/show.component';
import { NewansComponent } from './question/newans/newans.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashComponent,
    QuestionComponent,
    NewqComponent,
    ShowComponent,
    NewansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
