import { Component, OnInit }    from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }  from '@angular/router';
import 'rxjs/add/operator/filter';

class Breadcrumb {
  constructor(public label: string, public url: string) { }
}

@Component({
  selector: 'breadcrumbs',
  templateUrl: 'app/shared/breadcrumbs/breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.breadcrumbs = [];
        let currentRoute = this.route.root,
          url = '';
        do {
          let childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(route => {
            if(route.outlet === 'primary' && route.snapshot.url.length > 0) {
              let routeSnapshot = route.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              let label = '';
              if(route.snapshot.data['paramBreadcrumb'] && route.snapshot.data['paramBreadcrumb'] !== '') {
                label = route.snapshot.params[route.snapshot.data['paramBreadcrumb']];
              }
              else if(route.snapshot.data['breadcrumb']) {
                label = route.snapshot.data['breadcrumb'];
              }
              this.breadcrumbs.push(new Breadcrumb(label, url));
              currentRoute = route;
            }
          })
        } while(currentRoute);
      });
  }
}