import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
// import { EditComponent } from './edit/edit.component';

const routes: Routes = [{path:"home",pathMatch:"full",component:HomeComponent},
{path:"admin",pathMatch:"full",component:AdminComponent},
{path:"member",pathMatch:"full",component:MemberComponent},
// {path:"edit",pathMatch:"full",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
