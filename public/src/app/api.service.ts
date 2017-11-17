import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  user; 

}
