import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CatService } from "../cat.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "app-read-products",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"],
  providers: [CatService]
})
export class ReadComponent implements OnInit {
  // store list of products
  public cats;
  public Repdata;

  // initialize productService to retrieve list products in the ngOnInit()
  constructor(private catservice: CatService) {}

  // Read products from API.
  ngOnInit() {
    this.catservice.get_users().subscribe(names => (this.Repdata = names));
  }

  edit(id) {
    this.catservice.get_user(id).subscribe(names => (this.Repdata = names));
  }
}
