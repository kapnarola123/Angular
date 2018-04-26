import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CatService } from "../cat.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  lastname: string;
  firstname: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatService
  ) {}

  ngOnInit() {
    // myform = new FormGroup({
    //   name: new FormGroup({
    //     firstName: new FormControl("", Validators.required),
    //     lastName: new FormControl("", Validators.required)
    //   }),
    //   email: new FormControl("", [
    //     Validators.required,
    //     Validators.pattern("[^ @]*@[^ @]*")
    //   ]),
    //   password: new FormControl("", [
    //     Validators.minLength(8),
    //     Validators.required
    //   ]),
    //   language: new FormControl()
    // });
  }

  /**
   * update_user()
   * @uses update the user on click of the submit button
   */
  update_user() {
    this.route.params.subscribe(params => {
      this.service.create_user(this.firstname, this.lastname, params["id"]);
      this.router.navigate(["read"]);
    });
  }
}
