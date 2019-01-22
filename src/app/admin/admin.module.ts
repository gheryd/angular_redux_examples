import { AppCommonModule } from './../app-common/app-common.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthAdminContentComponent } from './components/auth-admin-content/auth-admin-content.component';
import { adminRouting } from './admin.routing';

@NgModule({
  declarations: [
    AuthAdminContentComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    adminRouting
  ],
  exports: [
    AuthAdminContentComponent,
    RouterModule
  ]
})
export class AdminModule { }
