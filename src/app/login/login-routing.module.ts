import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyappComponent } from './myapp/myapp.component';

const routes: Routes = [{

  path:'ok',component:MyappComponent,

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
