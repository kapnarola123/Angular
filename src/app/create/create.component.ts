import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CatService } from "../cat.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
  providers: [CatService]
})
export class CreateComponent implements OnInit {
  lastname: string;
  firstname: string;
  myform: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatService
  ) {}

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required)
      }),
    });
  }

  /**
   * update_user()
   * @uses update the user on click of the submit button
   */
  create_user() {
    this.route.params.subscribe(params => {
      this.service.create_user(this.firstname, this.lastname);
      this.router.navigate(["read"]);
    });
  }
}
