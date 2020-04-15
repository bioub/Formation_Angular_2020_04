import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styles: [],
})
export class ClockComponent implements OnInit {
  now = new Date();

  @Input()
  format = "HH:mm:ss";
  @Input()
  delay = 1000;

  constructor() {
    console.log("constructor delay", this.delay);
  }

  ngOnInit(): void {
    console.log("ngOnInit delay", this.delay);
    setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }
}
