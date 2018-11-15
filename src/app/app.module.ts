import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRefDirective } from './shared/input-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTabComponent,
    FaInputComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InputRefDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
