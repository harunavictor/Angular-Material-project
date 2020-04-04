import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class ImageService {
  public url = "../data.json";
  constructor(private http: HttpClient) {}
  getImage() {
    return this.http.get(this.url);
  }
}
