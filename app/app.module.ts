import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule}     from '@angular/platform-browser'
import { HttpModule }       from '@angular/http';
import { TranslateModule }  from 'ng2-translate/ng2-translate';
import { AppComponent }     from "./app.component";

import { CustomersModule }  from './customers/customers.module';
import { ServicesModule }   from './services/services.module';
import { PerformancesModule } from './performances/performances.module';
import { SharedModule }  from './shared/shared.module';

import { routing }    from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CustomersModule,
    ServicesModule,
    PerformancesModule,
    SharedModule,
    HttpModule,
    TranslateModule.forRoot(),
    routing
  ],
  declarations:   [
    AppComponent
  ],
  bootstrap:      [ AppComponent ]
})
export class AppModule { }