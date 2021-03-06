import { Component }        from '@angular/core';
import { TranslateService }  from 'ng2-translate/ng2-translate';

@Component({
  selector: 'mithos',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/style.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}