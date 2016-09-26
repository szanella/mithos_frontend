import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule}     from '@angular/platform-browser'
import { HttpModule }       from '@angular/http';
import { AppComponent }     from "./app.component";

import { CustomersModule }  from './customers/customers.module';
import { SharedModule }  from './shared/shared.module';

import { routing }    from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CustomersModule,
    SharedModule,
    HttpModule,
    routing
  ],
  declarations:   [
    AppComponent
  ],
  bootstrap:      [ AppComponent ]
})
export class AppModule { }