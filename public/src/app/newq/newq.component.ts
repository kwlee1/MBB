import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Question } from './../Question'

@Component({
  selector: 'app-newq',
  templateUrl: './newq.component.html',
  styleUrls: ['./newq.component.css']
})
export class NewqComponent implements OnInit {

  newQue = new Question(); 

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit to component")
		this._apiService.create(this.newQue, (createres)=>{
			this._router.navigateByUrl('/dashboard');
		})
	}

}
