import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mobile: boolean;

  constructor() {
    this.mobile = false;
   }

  ngOnInit() {
    if (window.screen.width <= 425) { // 768px portrait
      this.mobile = true;
    }
  }

}
