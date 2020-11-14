import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'odyssey-client';
  expression: boolean;
  constructor() {
    setTimeout(() => {
      this.expression = true;
    }, 2000);
  }
}
