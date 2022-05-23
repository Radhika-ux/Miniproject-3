import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/sharesservice/shared.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  loginForm: any;
  displayEmail: any;
  received_data: any

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.received_data = this.sharedService.reciveMsg();
    this.loginForm = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      "password": new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
    })
  }
  get email() {
    return this.loginForm.get("email")
  }
  get password() {
    return this.loginForm.get("password")
  }

  submitForm() {
    localStorage.setItem("email", this.loginForm.value.email);
    localStorage.setItem("password", this.loginForm.value.password);
    this.displayEmail = localStorage.getItem('email');
    for(let i = 0; i< this.received_data.length; i++){
      this.received_data[i];
      if(this.received_data[i].email==this.loginForm.value.email && this.received_data[i].password==this.loginForm.value.password){
        this.router.navigate([('./header')])
        console.log(this.loginForm.value)
        window.alert("logged in sussessfully")
      }
    }
 
    
  }
}
