import { RouterModule } from '@angular/router';
import { AuthAdminContentComponent } from './components/auth-admin-content/auth-admin-content.component';
import { CanActivateImpl } from '../app-common/services/can-activate-impl.service';
import { CanActivateAdmin } from './services/can-activate-admin.service';

export const adminRouting = RouterModule.forChild([
    {path: 'admin', component: AuthAdminContentComponent, canActivate: [CanActivateImpl, CanActivateAdmin]}
]);
