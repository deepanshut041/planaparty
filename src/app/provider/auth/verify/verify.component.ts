import { Component, OnInit, AfterViewInit} from "@angular/core";
import { AuthService } from "../auth.service";
import { validateConfig } from "@angular/router/src/config";
import { Router } from "@angular/router";

@Component({
  selector: "app-verify-admin",
  templateUrl: "./verify.component.html",
  styleUrls: ["./verify.component.css"]
})

export class VerifyComponent implements OnInit,AfterViewInit {
  alertMsg;
  email = "";
  constructor(private _authService:AuthService,private router:Router ) { 
    this.email =_authService.getUser().email;
  }
  ngOnInit() {
    
  }

  ngAfterViewInit(){
  }

  showForm(){
    var elem1 = document.getElementById("resendVerificationButton");
    elem1.className = "verify-button-box hide";
    var elem2 = document.getElementById("verifyResetEmailButton");
    elem2.className = "verify-button-box hide";
    var elem3 = document.getElementById("verifyResetEmail");
    elem3.className="input-group verify-button-box show";
  }

  hideForm(){
    var elem1 = document.getElementById("resendVerificationButton");
    elem1.className = "verify-button-box display";
    var elem2 = document.getElementById("verifyResetEmailButton");
    elem2.className = "verify-button-box display";
    var elem3 = document.getElementById("verifyResetEmail");
    elem3.className="input-group verify-button-box hide";
  }

  sendForm(){
    this.alertMsg = "Changed your Email";
    this.verifyAlert();
    this.hideForm()
  }
  resendEmail(){
    this.alertMsg = "Verification Email Resend";
    this.verifyAlert();
  }

  verifyAlert(){
    var elem1 = document.getElementById("verifyEmailBody");
    elem1.className = "panel-body text-center hide";
    var elem2 = document.getElementById("verifyEmailAlert");
    elem2.className = "text-center display";
    setTimeout(() => {
      elem1.className = "panel-body text-center display";
      elem2.className = "text-center hide";
    }, 2000);
  }
}
