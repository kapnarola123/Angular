import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CatService } from "../cat.service";
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from "rxjs/Rx";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
  providers: [CatService]
})
export class EditComponent implements OnInit {
  coin: any;
  // 	angForm: FormGroup;
  // 	title = 'Edit Coin';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatService
  ) {
    // 	  this.createForm();
  }

  // 	createForm() {
  // 	  this.angForm = this.fb.group({
  // 		name: ['', Validators.required ],
  // 		price: ['', Validators.required ]
  // 	 });
  // 	}

  updateCoin(firstname, lastname) {
	  console.log(firstname, lastname);
    // this.route.params.subscribe(params => {
    //   this.service.updateCoin(firstnameame, lastname, params["id"]);
    //   this.router.navigate(["index"]);
    // });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.coin = this.service
        .getsinglecategory(params["id"])
        .subscribe(res => {
          this.coin = res[0];
        });
    });
  }
}
