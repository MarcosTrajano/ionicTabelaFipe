import { ValorCarroPage } from './../valor-carro/valor-carro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the CarroVersoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carro-versoes',
  templateUrl: 'carro-versoes.html',
})
export class CarroVersoesPage {
  private idCarro:number;
  private idMarca:number
  private url:string;
  versoes:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.idMarca = this.navParams.get('idMarca')
    this.idCarro = this.navParams.get('idCarro')
    this.url = "http://fipeapi.appspot.com/api/1/carros/veiculo/" + this.idMarca + "/" + this.idCarro + ".json"
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.versoes = data
    })
  }

  valor(idAno: number) {
    this.navCtrl.push(ValorCarroPage, {
      idAno: idAno,
      idCarro: this.idCarro,
      idMarca: this.idMarca
    });

  }

}
