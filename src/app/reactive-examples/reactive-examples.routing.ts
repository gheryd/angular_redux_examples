import { RouterModule } from '@angular/router';
import { ExReactiveFormComponent } from './components/ex-reactive-form/ex-reactive-form.component';

export const reactiveExampleRouting  = RouterModule.forChild([
    {path: 'reactive-form', component: ExReactiveFormComponent}
  ]);
