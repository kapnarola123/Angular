import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

export interface Cat {
  name: string;
}

@Injectable()
export class CatService {
  public name;
  constructor(private http: Http) {}

  /**
   * get_users()
   * @uses Get the all users
   */
  get_users() {
    return this.http
      .get("http://localhost:9999/api/cats")
      .map((response: Response) => response.json());
  }

  /**
   * get_user()
   * @uses Get the single user record
   * @param id user id
   */
  get_user(id) {
    return this.http
      .get("http://localhost:9999/api/cat/" + id)
      .map((response: Response) => response.json());
  }

  deleteCat(name: string) {
    return this.http.delete("http://localhost:8000/api/cats/" + name);
  }

  /**
   * update_user()
   * @uses this function is used to call the API for update records
   * @param string firstname
   * @param string lastname
   * @param int id
   */
  update_user(firstname, lastname, id) {
    const uri = "http://localhost:9999/api/update_cat/" + id;
    const obj = {
      firstname: firstname,
      lastname: lastname,
      id: id
    };
    this.http.put(uri, obj).subscribe(res => console.log("Done"));
  }

  /**
   * create_user()
   * @uses this function is used to call the API for create records
   * @param string firstname
   * @param string lastname
   * @param int id
   */
  create_user(firstname, lastname) {
    const uri = "http://localhost:9999/api/create_user/";
    const obj = {
      firstname: firstname,
      lastname: lastname,
    };
    this.http.put(uri, obj).subscribe(res => console.log("Done"));
  }
}
