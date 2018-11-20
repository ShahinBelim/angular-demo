import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTabComponent } from './dynamic-tab/dynamic-tab.component';
import { DemoListComponent } from './demo-list/demo-list.component'; // Demo usage of @HostListener() and @HostBinding() listeners
import { ContentProjectionDemoComponent } from './content-projection-demo/content-projection-demo.component';
import { ChildComponent } from './content-projection-demo/child/child.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo-list', pathMatch: 'full' },
  {
    path: 'content-projection-demo',
    component: ContentProjectionDemoComponent,
    children: [
      {
        path: 'child/:id',
        component: ChildComponent
      }
    ]
  },
  { path: 'dynamic-tab-component', component: DynamicTabComponent },
  { path: 'demo-list', component: DemoListComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
