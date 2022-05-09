import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openCV(): void {
    window.open(
      "https://nazar2000.github.io/angular-portfolio/assets/cv/CV_FE_Nazarii_Pyndus.pdf",
      "_blank",
      "fullscreen=yes"
    );
  }
}
