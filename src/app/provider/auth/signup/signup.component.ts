import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})

export class SignupComponent implements OnInit {
  msg:any;
  constructor(private _authService:AuthService) { 

  }

  ngOnInit() {
  }
  signup(email:string,password:string){
    var send = this._authService.signup(email,password)
    send.then((success)=>{
      this._authService.getUser().sendEmailVerification()
    }).catch((err)=>{
      this.msg = err.message
      console.log(this.msg);
    })
  }
}
