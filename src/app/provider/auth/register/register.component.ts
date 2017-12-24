import { Component, OnInit } from "@angular/core";
import { FormGroup,FormControl, FormBuilder, Validators,ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../auth.service"; 

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})

export class RegisterComponent implements OnInit {
  
  registerForm:FormGroup;
  email:String;

  constructor(private _formBuilder:FormBuilder,private authService:AuthService ) { 

  }

  ngOnInit() {
    const userKey = Object.keys(window.localStorage).filter(it => it.startsWith('firebase:authUser'))[0];
    const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
    console.log(user.email);
    this.registerForm = new FormGroup({
      VendorName: new FormControl(''),
      FirmName: new FormControl(''),
      TIN: new FormControl(''),
      PAN: new FormControl(''),
      GSTN: new FormControl(''),
      City: new FormControl(''),
      PinCode: new FormControl(''),
      Location: new FormControl(''),
      Email: new FormControl(''),
      Mobile: new FormControl(''),
      Landline: new FormControl(''),
      EstablishedDate: new FormControl(''),
      RegisteredAddress: new FormControl(''),
      VendorType: new FormControl('')
    });
  }

  registerUser(){
    console.log(this.registerForm.value)
    this.authService.registerUser(this.registerForm.value).subscribe(()=>{
      console.log("User registered")
    },(err)=>{
      console.log(err)
    })
  }
}
