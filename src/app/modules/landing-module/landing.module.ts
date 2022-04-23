import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./components/landing/landing.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { LifeRoadComponent } from "./components/life-road/life-road.component";

@NgModule({
  declarations: [
    PreviewComponent,
    LandingComponent,
    AboutMeComponent,
    LifeRoadComponent,
  ],
  imports: [CommonModule, LandingRoutingModule],
  providers: [],
})
export class LandingModule {}
