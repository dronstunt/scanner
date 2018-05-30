import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
options:BarcodeScannerOptions;
encodText:String="";
scannedData:any={};
  constructor(public navCtrl: NavController, public scanner:BarcodeScanner) {
    
  }
  scan(){
    this.options={
      prompt:'Scan you barcode'
    };
    this.scanner.scan().then((data) => {
      this.scannedData = data;
    },(err) => {
      console.log('Error :',err);
    })
  }

}
