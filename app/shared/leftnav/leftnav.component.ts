import { Component }    from '@angular/core';

class NavLink {
  constructor(private label: string, private route: string, private icon: string) { }
}

@Component({
  selector: 'left-nav',
  templateUrl: 'app/shared/leftnav/leftnav.component.html'
})

export class LeftnavComponent {
  links: NavLink[];

  constructor() {
    this.links = [
      new NavLink('leftnav.customers', '/customers', 'contacts'),
      new NavLink('leftnav.services', '/services', 'list'),
      new NavLink('leftnav.performances', '/performances', 'receipt'),
    ];
  }
}