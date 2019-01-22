import { AdminModule } from './admin/admin.module';

import { AppAction } from './services/actions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {NgRedux, NgReduxModule, DevToolsExtension} from 'ng2-redux';

import {IAppState, rootReducer, INITIAL_STATE} from './store/store';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { CamelizePipe } from './pipes/camelize.pipe';
import { ProductsService } from './services/products.service';
// component
import { AppComponent } from './components/app/app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { PanelComponent } from './components/panel/panel.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import {ExampleDirectiveComponent} from './components/example-directive/example-directive.component';
import { CounterComponent } from './components/counter/counter.component';
import { ExampleEventsComponent } from './components/example-events/example-events.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { appRouting } from './app.routing';

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
    NotfoundComponent,
    LoginComponent,
    AuthContentComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    AdminModule,
    appRouting
  ],
  providers: [
    ProductsService,
    AppAction
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode ? [devTools.enhancer()] : [];
    const middelwares = [];
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      middelwares,
      enhancers
    );
  }
}
