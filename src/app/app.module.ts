import { AppAction } from './actions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux'
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import {IAppState, rootReducer, INITIAL_STATE} from './store'

import { CamelizePipe } from './camelize.pipe';
import { ProductsService } from './services/products.service';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { PanelComponent } from './panel/panel.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import {ExampleDirectiveComponent} from './example-directive/example-directive.component';
import { CounterComponent } from './counter/counter.component';
import { ExampleEventsComponent } from './example-events/example-events.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CamelizePipe,
    PanelComponent,
    MyDirectiveDirective,
    FormComponent,
    HomeComponent,
    ExampleDirectiveComponent,
    CounterComponent,
    ExampleEventsComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'form', component: FormComponent}
      ,{path: '', component:HomeComponent}
      ,{path: 'example-directive', component:ExampleDirectiveComponent}
      ,{path: 'products', component: ProductsComponent}
      ,{path: 'counter', component: CounterComponent}
      ,{path: 'events', component: ExampleEventsComponent}
    ])
  ],
  providers: [
    ProductsService,
    AppAction
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension){
    const enhancers = isDevMode ? [devTools.enhancer()] : []
    const middelwares = []
    ngRedux.configureStore(
      rootReducer, 
      INITIAL_STATE,
      middelwares,
      enhancers
    );
  }
}
