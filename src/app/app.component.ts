import { Component, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewserviceService } from './newservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient ) { }
    posts : any = [];
    title : string = 'default';

    ngOnInit() {
      this.http.get('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5').subscribe(posts => {
        console.log(posts);
        this.posts=posts;
      })
    }




}
