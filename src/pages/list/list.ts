import { CarrosPage } from './../carros/carros';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public marcas: Array<string>;
  private url:string = "http://fipeapi.appspot.com/api/1/carros/marcas.json"

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
    this.fetchContent();
  }

  fetchContent (){
    let loading = this.loadingCtrl.create({
      content:'Fetching content...'
    });

    loading.present();
    
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.marcas = data
      loading.dismiss();
    });
  }

  filterItems(ev){
    // var val = ev.target.value;
    // if(val && val.trim() != ''){
    //   this.marcas = this.marcas.filter((item) =>{
    //     return item.data.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
    //   })
    // }
  }

  carros(id: number) {
    this.navCtrl.push(CarrosPage, {
      id: id
    });
  }
}
