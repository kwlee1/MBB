import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  user; 
  questions; 

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.user = this._apiService.user; 
    this._apiService.all((res)=>{
      this.questions=res;
    })
  }

}
