import { AppAction } from './store/actions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux'
import {RouterModule} from '@angular/router';
import { AppComponent } from './components/app/app.component';

import {IAppState, rootReducer, INITIAL_STATE} from './store/store'
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { CamelizePipe } from './pipes/camelize.pipe';
import { ProductsService } from './services/products.service';
//components
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PanelComponent } from './components/panel/panel.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import {ExampleDirectiveComponent} from './components/example-directive/example-directive.component';
import { CounterComponent } from './components/counter/counter.component';
import { ExampleEventsComponent } from './components/example-events/example-events.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotfoundComponent } from './components/notfound/notfound.component'

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
    ExampleEventsComponent,
    ProductDetailComponent,
    NotfoundComponent
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
      ,{path: 'product/:id', component: ProductDetailComponent}
      ,{path: '**', component: NotfoundComponent}
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
