import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-verify-admin",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})

export class VerifyComponent implements OnInit {
  constructor(private _authService:AuthService) { 
  }
  ngOnInit() {
  }
}
