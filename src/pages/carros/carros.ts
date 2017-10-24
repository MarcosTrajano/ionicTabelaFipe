import { CarroVersoesPage } from './../carro-versoes/carro-versoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the CarrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carros',
  templateUrl: 'carros.html',
})
export class CarrosPage {
  codigoMarca:number;
  private url:string;
  modelos:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.codigoMarca = this.navParams.get('id')
    this.url = "http://fipeapi.appspot.com/api/1/carros/veiculos/" + this.codigoMarca + ".json"
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.modelos = data
    })
  }

  versoes(id: number) {
    this.navCtrl.push(CarroVersoesPage, {
      idCarro:id,
      idMarca:this.codigoMarca
    });
  }

}
