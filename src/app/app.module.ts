import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './shared/input-ref.directive';
import { ChangeBgColorDirective } from './shared/change-bg-color.directive';
import { DemoListComponent } from './demo-list/demo-list.component';
import { ContentProjectionDemoComponent } from './content-projection-demo/content-projection-demo.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './content-projection-demo/child/child.component'; // Demo usage of @HostListener() and @HostBinding() listeners

@NgModule({
  declarations: [
    AppComponent,
    DynamicTabComponent,
    FaInputComponent,
    InputRefDirective,
    ChangeBgColorDirective,
    DemoListComponent,
    ContentProjectionDemoComponent,
    HeaderComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InputRefDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
