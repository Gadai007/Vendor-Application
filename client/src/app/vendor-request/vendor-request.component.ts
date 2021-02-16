import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-request',
  templateUrl: './vendor-request.component.html',
  styleUrls: ['./vendor-request.component.css']
})
export class VendorRequestComponent implements OnInit {

  constructor() { }
  getUserRequestDeatils(value){
    console.log(value);
  }
  ngOnInit(): void {
  }

}
