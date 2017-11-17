import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashComponent } from './dash/dash.component';
import { NewqComponent } from './newq/newq.component';
import { ShowComponent } from './question/show/show.component';
import { QuestionComponent } from './question/question.component';
import { NewansComponent } from './question/newans/newans.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component:UserComponent},
  {path: "dashboard", pathMatch: 'full', component:DashComponent},
  {path: "newq", pathMatch: 'full', component:NewqComponent},
  {path: "que", component:QuestionComponent, children:[
    {path: ":id/new_answer", component:NewansComponent},
    {path: ":id", component:ShowComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
