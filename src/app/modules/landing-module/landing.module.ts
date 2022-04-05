import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LandingRoutingModule} from './landing-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import {PreviewComponent} from "./components/preview/preview.component";

@NgModule({
  declarations: [
    PreviewComponent,
    LandingComponent
  ],
  imports: [CommonModule, LandingRoutingModule],
  providers: []
})
export class LandingModule {
}
