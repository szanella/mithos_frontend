import { Component, OnInit }    from '@angular/core';
import { TranslateService }     from 'ng2-translate/ng2-translate';

@Component({
  selector: 'mithos-header',
  templateUrl: 'app/shared/header/header.component.html'
})

export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    //noinspection TypeScriptUnresolvedFunction
    $(".dropdown-button").dropdown();
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
}