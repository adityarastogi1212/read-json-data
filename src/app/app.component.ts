import { Component } from '@angular/core';
import data from './_files/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app03';
  public dataList:{name:string, address:string, email:string, rating:number}[] = data;
}
