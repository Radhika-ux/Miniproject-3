import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  submit_btn:any; 
  value:any;
  converted:any;
  selectedcurrency:any; 

  constructor() {  }

  ngOnInit(): void {
  }
  selectChange(event:any){
    this.selectedcurrency = event.target.value;
  }
  convertion(){
    if(this.selectedcurrency == "US_Dollars" ){
      this.converted = this.value * 77;
    }
    if(this.selectedcurrency == "Euro" ){
      this.converted = this.value * 81;
    }
    if(this.selectedcurrency == "British_Pound" ){
      this.converted = this.value * 96;
    }
    if(this.selectedcurrency == "British_Pound" ){
      this.converted = this.value * 54;
    }
    if(this.selectedcurrency == "Australian_Dollars" ){
      this.converted = this.value * 21;
    }
    if(this.selectedcurrency == "UAE_Dirham" ){
      this.converted = this.value * 49;
    }
    console.log(this.value);
  }

}
