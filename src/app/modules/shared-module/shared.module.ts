import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  providers: [],
  exports: [FooterComponent],
})
export class SharedModule {}
