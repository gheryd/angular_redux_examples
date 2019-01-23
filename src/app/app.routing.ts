import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { CanActivateImpl } from './app-common/services/can-activate-impl.service';
import { FormComponent } from './components/form/form.component';
import { ExampleDirectiveComponent } from './components/example-directive/example-directive.component';
import { ProductsComponent } from './components/products/products.component';
import { CounterComponent } from './components/counter/counter.component';
import { ExampleEventsComponent } from './components/example-events/example-events.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const appRouting  = RouterModule.forRoot([
    {path: '', component: HomeComponent}
    , {path: 'login', component: LoginComponent}
    , {path: 'authorized', component: AuthContentComponent, canActivate: [CanActivateImpl]}
    , {path: 'form', component: FormComponent}
    , {path: 'example-directive', component: ExampleDirectiveComponent}
    , {path: 'products', component: ProductsComponent}
    , {path: 'counter', component: CounterComponent}
    , {path: 'events', component: ExampleEventsComponent}
    , {path: 'product/:id', component: ProductDetailComponent}
    , {path: '**', component: NotfoundComponent}
  ]);
