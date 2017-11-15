import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-reset-admin",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.css"]
})

export class ResetComponent implements OnInit {
  constructor(private _authService:AuthService) { 
  }
  ngOnInit() {
  }
}
