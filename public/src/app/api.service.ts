import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

	user; 
	
	all(callback){
		this._http.get('/all').subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
    };
  
    show(data, callback){
		console.log("at service", data)
		this._http.get('/show/'+data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

    create(data, callback){
		this._http.post('/newquestions', data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

	createans(data, callback){
		this._http.post('/newans', data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

	
	


}
