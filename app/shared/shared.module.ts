import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }         from '@angular/router';
import { FormsModule, Form }      from '@angular/forms';

import { HeaderComponent }      from './header/header.component';
import { LeftnavComponent }     from './leftnav/leftnav.component';

@NgModule({
  imports:      [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    LeftnavComponent
  ],
  exports:      [
    HeaderComponent,
    LeftnavComponent
  ]
})
export class SharedModule { }