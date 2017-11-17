import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Answer } from './../../Answer'

@Component({
  selector: 'app-newans',
  templateUrl: './newans.component.html',
  styleUrls: ['./newans.component.css']
})
export class NewansComponent implements OnInit {

  user; 
  que; 
  newAns = new Answer(); 

  constructor(private _apiService: ApiService,private _route: ActivatedRoute, private _router: Router) {
    this._route.paramMap.subscribe((params)=>{
			this.que=params.get("id")
    })
   }

  ngOnInit() {
    this.user = this._apiService.user; 
  }

    onSubmit(){
    console.log("submit to component")
		this._apiService.createans(this.newAns, (createres)=>{
			this._router.navigateByUrl('/dashboard');
		})
	}

}
