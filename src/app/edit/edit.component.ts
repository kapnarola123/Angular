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
  lastname: string;
  firstname: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatService
  ) {}

  /**
   * ngOnInit()
   * @uses get the records from the api based on the id of users
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.get_user(params["id"]).subscribe(res => {
        this.lastname = res[0]["last_name"];
        this.firstname = res[0]["first_name"];
      });
    });
  }

  /**
   * update_user()
   * @uses update the user on click of the submit button
   */
  update_user() {
    this.route.params.subscribe(params => {
      this.service.update_user(this.firstname, this.lastname, params["id"]);
      this.router.navigate(["read"]);
    });
  }  
}
