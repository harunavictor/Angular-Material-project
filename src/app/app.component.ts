import { Component } from "@angular/core";
import "rxjs/add/operator/map";
import * as  data from "../data.json";
import { ImageService } from "./image.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}
