import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MyappComponent } from './myapp/myapp.component'; 
@NgModule({
  declarations: [MyappComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[MyappComponent]
})
export class LoginModule { }
