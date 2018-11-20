
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd, NavigationStart, GuardsCheckEnd, RouteConfigLoadStart, ActivationStart } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  componentName: string;
  id:any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    router.events
      .pipe(
        filter(event => event instanceof ActivationStart)
      )
      .subscribe(event => {
        console.log('----------------- event ------------------', event);
        if (event instanceof ActivationStart) {
          console.log(" ActivationStart  ---- event ", event)
          if (event && event.snapshot && event.snapshot.routeConfig && event.snapshot.routeConfig.component) {
            console.log("Active Component Name => ", event.snapshot.routeConfig.component.name)
            this.componentName = event.snapshot.routeConfig.component.name;
            if(event.snapshot.params && event.snapshot.params.id) {
              this.id = event.snapshot.params.id
            } else {
              this.id = 'No route params found';
            }
          }
        }
      });
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
