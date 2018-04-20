import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { ProductService } from "../product.service";
import { CatService } from "../cat.service";
// import { Observable } from "rxjs/Observable";
import { Observable } from "rxjs/Rx";
import { Product } from "../product";

@Component({
  selector: "app-read-products",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"],
  providers: [CatService]
})
export class ReadComponent implements OnInit {
  // store list of products
  products: Product[];
  public cats;
  public Repdata;

  // initialize productService to retrieve list products in the ngOnInit()
  constructor(private catservice: CatService) {}

  // Read products from API.
  ngOnInit() {
    this.catservice.getFoods().subscribe(names => (this.Repdata = names));
  }

  edit(id) {
	this.catservice.getsinglecategory(id).subscribe(names => (this.Repdata = names));
  }
}
