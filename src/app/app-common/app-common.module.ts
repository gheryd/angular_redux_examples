import { AuthService } from './services/auth.service';
import { CanActivateImpl } from './services/can-activate-impl.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule
  ],
  providers: [
    CanActivateImpl,
    AuthService
  ],
  exports: [
    PanelComponent
  ]
})
export class AppCommonModule { }
