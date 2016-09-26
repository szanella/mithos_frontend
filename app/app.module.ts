import { NgModule }       from '@angular/core';
import { BrowserModule}   from '@angular/platform-browser'
import { HttpModule }     from '@angular/http';
import { AppComponent }   from "./app.component";

import { CustomersModule }  from './customers/customers.module';

import { routing }    from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    CustomersModule,
    HttpModule,
    routing
  ],
  declarations:   [
    AppComponent
  ],
  bootstrap:      [ AppComponent ]
})
export class AppModule { }