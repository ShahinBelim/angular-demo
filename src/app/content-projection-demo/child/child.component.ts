import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
    const id: string = this.route.snapshot.params.id; // Do not use this. Instead subscribe router ActivationStart and get snapshot for route config. Check HeaderComponent for more details
  }

  ngOnInit() {
  }
}
