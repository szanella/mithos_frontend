import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }         from '@angular/router';
import { FormsModule, Form }      from '@angular/forms';
import { TranslateModule }  from 'ng2-translate/ng2-translate';

import { HeaderComponent }      from './header/header.component';
import { LeftnavComponent }     from './leftnav/leftnav.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports:      [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    LeftnavComponent,
    BreadcrumbsComponent
  ],
  exports:      [
    HeaderComponent,
    LeftnavComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }