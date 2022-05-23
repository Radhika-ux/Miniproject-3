import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/sharesservice/shared.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  registerForm:any;
  listOfusers:any=[];
  constructor(private router:Router,private SharedService:SharedService) { }

  ngOnInit(): void {
    this.SharedService.sendMsg(this.listOfusers);
    this.registerForm = new FormGroup({
      "firstname": new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
      "lastname": new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
      "email": new FormControl("",[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      "password": new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
      "repassword": new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
      "phonenumber": new FormControl("",[Validators.required,Validators.maxLength(12),Validators.pattern("[6-9]\\d{9}")]),
      "street": new FormControl("",[Validators.required]),
      "place":new FormControl("",[Validators.required]),
      "city":new FormControl("",[Validators.required]),
      "state":new FormControl("",[Validators.required]),
    })

  }
  get firstname(){
    return this.registerForm.get("firstname")
  }
  get lastname(){
    return this.registerForm.get("lastname")
  }
  get email(){
    return this.registerForm.get("email")
  }
  get password(){
    return this.registerForm.get("password")
  }
  get repassword(){
    return this.registerForm.get("repassword")
  }
  get phonenumber(){
    return this.registerForm.get("phonenumber")
  }
  get street(){
    return this.registerForm.get("street")
  }
  get place(){
    return this.registerForm.get("place")
  }
  get city(){
    return this.registerForm.get("city")
  }
  get state(){
    return this.registerForm.get("state")
  }
  submitForm(){
    if(this.registerForm.get("password").value == this.registerForm.get("repassword").value){
      console.log("password conform password are matched")
      localStorage.setItem("firstname",this.registerForm.value.firstname);
      localStorage.setItem("lastname",this.registerForm.value.lastname);
      localStorage.setItem("email",this.registerForm.value.email);
      localStorage.setItem("password",this.registerForm.value.password);
      localStorage.setItem("repassword",this.registerForm.value.repassword);
      localStorage.setItem("phonenumber",this.registerForm.value.phonenumber);
      localStorage.setItem("street",this.registerForm.value.street);
      localStorage.setItem("place",this.registerForm.value.place);
      localStorage.setItem("city",this.registerForm.value.city);
      localStorage.setItem("state",this.registerForm.value.state);
      console.log(this.registerForm)
      this.listOfusers.push(this.registerForm.value);
      console.log(this.listOfusers);
      this.router.navigate(['./loginform'])
     
    }
  }
}
