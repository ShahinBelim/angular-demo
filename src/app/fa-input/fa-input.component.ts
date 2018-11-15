import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { InputRefDirective } from '../shared/input-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements OnInit {
  @Input() icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;
  
  constructor() { }

  ngOnInit() {
  }

  get classes() {
    const classes = {
      fa: true
    }
    classes['fa-' + this.icon] = true;
    console.log("this.icon : ", this.icon);
    console.log("classes : ", classes);
    return classes;
  }
}
