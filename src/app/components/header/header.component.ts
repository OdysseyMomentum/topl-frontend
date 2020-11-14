import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  mobile: boolean;

  constructor() {
    this.mobile = false;
  }


  ngOnInit() {
    // let version = 1;
    // console.log(version);
    if (window.screen.width <= 1199) { // 768px portrait
      this.mobile = true;
    }

    $(document).ready(function () {
      $(document).click(function (event) {
          var clickover = $(event.target);
          var _opened = $(".navbar-collapse").hasClass("show");
          if (_opened === true && !clickover.hasClass("navbar-toggler")) {
              $(".navbar-toggler").click();
          }
      });
  });

}


}
