import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private url: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {

  }


  scrollTop() {
    window.scrollTo(0, 0);
  }
}
