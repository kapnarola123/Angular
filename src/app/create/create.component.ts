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

    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: '', alterEgo: 'Dr. What', power: this.powers[0]};
  lastname: string;
  firstname;
  myform: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CatService
  ) {}

  ngOnInit() {
      this.myform = new FormGroup({
        'name': new FormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
        ]),
        'alterEgo': new FormControl(this.hero.alterEgo),
        'power': new FormControl(this.hero.power, Validators.required),
        'firstname': new FormControl(this.firstname, [Validators.required])
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
