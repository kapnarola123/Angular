import { Component, OnInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("goals", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          stagger("300ms", [
            animate(
              ".6s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-75%)", offset: 0 }),
                style({ opacity: 0.5, transform: "translateY(35px)", offset: .3}),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        ),
        query(
          ":leave",
          stagger("300ms", [
            animate(
              ".6s ease-in",
              keyframes([
                style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
                style({ opacity: .5, transform: "translateY(35px)", offset: .3 }),
                style({ opacity: 0, transform: "translateY(-75%)", offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemcount: number;
  btntext: string = "add an item";
  goaltext: string = "demo";
  goals = ["Great India", "Great Indians", "Great Indian culture"];

  constructor() {}

  ngOnInit() {
    this.itemcount = this.goals.length;
  }

  additem() {
    this.goals.push(this.goaltext);
    this.goaltext = "";
    this.itemcount = this.goals.length;
  }

  removeitem(i) {
    this.goals.splice(i, 1);
  }
}
