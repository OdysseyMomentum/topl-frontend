import { Component, OnInit } from '@angular/core';
import { Mission } from '../../mission';

@Component({
  selector: 'app-mission-form',
  templateUrl: './mission-form.component.html',
  styleUrls: ['./mission-form.component.scss']
})
export class MissionFormComponent implements OnInit {
  completeDate: Date;
  localCompleteDate: string;

  constructor() {
    this.completeDate = new Date();
    this.localCompleteDate = this.completeDate.toISOString();
    this.localCompleteDate = this.localCompleteDate.substring(0, this.localCompleteDate.length - 1);
  }

  ngOnInit() {
  }

  msgCodes = ['M21', 'M72'];

  date = new Date();
  isoDate = this.date.toISOString();
  isoDate2 = this.isoDate.substring(0, this.isoDate.length - 1);

  model = new Mission(18, 'lat12213', 'long1', this.isoDate2, this.msgCodes[0]);
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Model to be submitted: ", this.model);
    console.log(this.model);
  }

  newMission() {
    this.model = new Mission(42, '', '', '');
  }

}
