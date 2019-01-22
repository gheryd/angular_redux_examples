import { AuthService } from './services/auth.service';
import { CanActivateImpl } from './services/can-activate-impl.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CanActivateImpl,
    AuthService
  ],
  exports: [

  ]
})
export class AppCommonModule { }
