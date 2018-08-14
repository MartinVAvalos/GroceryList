import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MyListComponent } from './my-list/my-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' }, //pathMatch overrides the default of prefix an tells angular to only redirect if the full path is empty
  {path: 'login', component: LoginComponent },
  {path: 'my-list' component: MyListComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule] //NOTE: We dont include forRoot(), beacause we already did that
})
export class AppRoutingModule {

}
