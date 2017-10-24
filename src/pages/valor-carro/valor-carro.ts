import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ValorCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export class Carro{
  referencia: String
  fipe_codigo: String
  name: String
  combustivel: String
  marca: String
  ano_modelo: String
  preco: String
  key:String
  time: number
  veiculo: String
  id: String
}
@IonicPage()
@Component({
  selector: 'page-valor-carro',
  templateUrl: 'valor-carro.html',
})
export class ValorCarroPage {
  private idCarro:number;
  private idMarca:number;
  private idAno:number;
  private url:string;
  carro:Carro;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.carro = new Carro()
    this.idMarca = this.navParams.get('idMarca')
    this.idCarro = this.navParams.get('idCarro')
    this.idAno = this.navParams.get('idAno')
    this.url = "http://fipeapi.appspot.com/api/1/carros/veiculo/" + this.idMarca + "/" + this.idCarro +"/"+this.idAno+ ".json"
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.carro = data
    })
  }
}
