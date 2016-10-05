import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { TranslateModule }  from 'ng2-translate/ng2-translate';

import { PerformancesService } from './performances.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot()
  ],
  providers: [
    PerformancesService
  ]
})
export class PerformancesModule { }