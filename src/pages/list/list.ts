import { CarrosPage } from './../carros/carros';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public marcas:Array<string>;
  private url:string = "http://fipeapi.appspot.com/api/1/carros/marcas.json"

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
        this.marcas = data
      }
    )
  }

  carros(id: number) {
    this.navCtrl.push(CarrosPage, {
      id: id
    });
  }
}
