import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing';
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
    posts:any;
  constructor(private http: HttpClient ) { }


}
