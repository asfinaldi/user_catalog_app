import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './modules/users/users.component';
import { UserdetailComponent } from './modules/userdetail/userdetail.component';
import { UserResolver } from './shared/service/user.resolver';

const routes: Routes = [
  { path: 'users', component:UsersComponent},
  { path: 'user/:uuid', component:UserdetailComponent, resolve:{resolvedResponse:UserResolver}},
  { path: '**', redirectTo:'users'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
