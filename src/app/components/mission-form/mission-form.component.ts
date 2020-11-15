import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Mission } from '../../mission';

import {
  toLatLon, toLatitudeLongitude, headingDistanceTo, moveTo, insidePolygon
} from 'geolocation-utils'

@Component({
  selector: 'app-mission-form',
  templateUrl: './mission-form.component.html',
  styleUrls: ['./mission-form.component.scss']
})
export class MissionFormComponent implements OnInit {

  constructor(private api: ApiService) {

  }

  ngOnInit() {

  }

  msgCodes = ['21', '72'];
  date = new Date();
  isoDate = this.date.toISOString();
  isoDate2 = this.isoDate.substring(0, this.isoDate.length - 1);
  model = new Mission(18, '41.8781', '87.6298', this.isoDate2, this.msgCodes[0]);
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Model to be submitted: ", this.model);

    // remove milliseconds from dateTime
    this.model.dateTime = this.dateToISO8601(this.model.dateTime);

    let msgBody = this.getMessageBody(this.model);
    this.sendWhiteflagMessage(msgBody);

    // console.log(this.toISO6709("-3.90", "lat"));
    // console.log(this.toISO6709("-3.90", "long"));
    // console.log(this.toISO6709("3.90", "lat"));
    // console.log(this.toISO6709("3.90", "long"));
    // console.log(this.toISO6709("130.90000000", "long"));
    // console.log(this.toISO6709("+10.90000", "long"));
  }

  dateToISO8601(date) {
    date = date.replace(/\.\d+/, "");
    date = date + "Z";
    console.log(date);
    return date;
  }

  newMission() {
    this.model = new Mission(42, '', '', '');
  }

  // send message to whiteflag/topl-bifrost
  sendWhiteflagMessage(body: any): any {
    this.api.POST('/messages/send', body)
      .subscribe(res => {
        console.log("data sent...");
      });
  }

  toISO6709(geoCoordinate: any, coorType: string): any{
    //type = lat or long

    if(!geoCoordinate){
      return;
    }
    let x = Number(geoCoordinate);
    console.log("number: ", x)
    let negative = false;
    let result = null;

    if(x<0){
      negative=true;
      x*=-1;
    }
    // ensure 5 decimal digits
    x.toFixed(5);

    // add trailing 0
    if(coorType === "lat" && x <10){
      result = "0"+x;
    }
    if(coorType === "long"){
      //result =this.padNum(3, x);
    }

    if(negative){
      result = "-" + result;
    }else {
      result = "+" + result;
    }
    return result;
  }

  padNum(num, n) {
    return new Array(n).join('0').slice((n || 3) * -1) + this;
  }

  getMessageBody(userParams:Mission): any {
   let msgBody = {
      "MetaHeader": {
          "blockchain": "topl-testnet",
          "originatorAddress": "5JJquNw481t6ch3jn7maTZMmP6Suva19sdmQZ1ZNco7fzJmmGx9"
      },
      "MessageHeader": {
          "Prefix": "WF",
          "Version": "1",
          "EncryptionIndicator": "0",
          "DuressIndicator": "0",
          "MessageCode": "M",
          "ReferenceIndicator": "0",
          "ReferencedMessage": "0000000000000000000000000000000000000000000000000000000000000000"
      },
      "MessageBody": {
          "SubjectCode": userParams.msgCode,
          "DateTime": userParams.dateTime,//'2020-05-12T13:30:00Z'
          "Duration": "P00D00H00M",
          "ObjectType": "15",
          "ObjectLatitude": userParams.latitude,
          "ObjectLongitude": userParams.longitude,
          // "ObjectLatitude": "+29.76017",
          // "ObjectLongitude": "-095.36937",
          "ObjectSizeDim1": "0000",
          "ObjectSizeDim2": "0000",
          "ObjectOrientation": "000"
      }
    }
    return msgBody;
  }

}
