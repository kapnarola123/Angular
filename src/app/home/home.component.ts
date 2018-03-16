import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  itemcount: number = 4;
  btntext: string = 'add an item';
  goaltext: string = 'demo'

  constructor() {}

  ngOnInit() {}
}
