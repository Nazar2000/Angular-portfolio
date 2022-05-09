import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./components/landing/landing.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { LifeRoadComponent } from "./components/life-road/life-road.component";
import { MyServicesComponent } from "./components/my-services/my-services.component";
import { MyWorkComponent } from "./components/my-work/my-work.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    PreviewComponent,
    LandingComponent,
    AboutMeComponent,
    LifeRoadComponent,
    MyServicesComponent,
    MyWorkComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, MatCardModule, MatButtonModule],
  providers: [],
})
export class LandingModule {}
