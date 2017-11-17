import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  user; 
  que;
  question; 

  constructor(private _apiService: ApiService,private _route: ActivatedRoute) {
    this._route.paramMap.subscribe((params)=>{
			this.que=params.get("id")
    })
    
    
   }

  ngOnInit() {
    this.user = this._apiService.user; 
    console.log('on init', this.que)
    this._apiService.show(this.que, (res)=>{
      console.log(res)
      this.question=res;
    })
    console.log(this.question)
  }

}
