import { AppCommonModule } from './../app-common/app-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reactiveExampleRouting } from './reactive-examples.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExReactiveFormComponent } from './components/ex-reactive-form/ex-reactive-form.component';

@NgModule({
  declarations: [ExReactiveFormComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule,
    reactiveExampleRouting
  ],
  exports: [
    RouterModule
  ]
})
export class ReactiveExamplesModule { }
